const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { Dog, Temperament } = require("../db");
const { URL_API } = require("../utils/index");
const apiKey = process.env.API_KEY;

function dogs(req, res, next) {
  const { name, page } = req.query;
  const myDog = Dog.findAll({ include: Temperament });
  const apiDogs = axios.get(`${URL_API}?api_key=${apiKey}`);
  Promise.all([myDog, apiDogs])
    .then((results) => {
      const [myResults, apiResults] = results;
      const response = myResults.concat(apiResults.data);
      if (name) {
        let find = response.filter((o) =>
          o.name.toLowerCase().includes(name.toLowerCase())
        );
        resultDog(find);
        return res.status(200).json(find.slice(0, 8));
      }
      if (page) {
        resultDog(response);
        return res.status(200).json(response.slice(8 * (page - 1), 8 * page));
      }
      resultDog(response);
      return res.status(200).json(response.slice(0, 8));
    })
    .catch((err) => next(err));
}
function getById(req, res, next) {
  const { id } = req.params;
  if (id.length > 3) {
    Dog.findByPk(id, { include: Temperament })
      .then((results) => {
        const { id, name, height, weight, years, temperaments, image } =
          results;
        console.log(temperaments.length);
        let temperament = [];
        if (temperaments.length == 1) {
          temperament.push(temperaments[0].name);
        } else {
          temperaments.forEach((i) => temperament.push(i.name));
        }
        temperament = temperament.join(", ");
        let obj = { id, name, height, weight, years, temperament, image };
        res.json(obj);
      })
      .catch((err) => next(err));
  } else {
    axios
      .get(`${URL_API}?api_key=${apiKey}`)
      .then((results) => {
        const data = results.data;
        let index = data.findIndex((p) => p.id == id);
        const props = data[index];
        return res.json({
          id: props.id,
          name: props.name,
          height: props.height.imperial,
          weight: props.weight.imperial,
          years: props.life_span,
          temperament: props.temperament,
          image: props.image.url,
        });
      })
      .catch((err) => next(err));
  }
}
async function addDog(req, res, next) {
  const { name, weight, height, years, temperament } = req.body;

  const ide = uuidv4();
  const image =
    "https://ep01.epimg.net/verne/imagenes/2015/08/04/articulo/1438683590_611299_1438691031_noticia_normal.jpg";
  try {
    const createdDog = await Dog.create({
      id: ide,
      name,
      weight,
      height,
      years,
      image,
    });

    for await (let temp of temperament) {
      const ide2 = uuidv4();
      let createdTemperament = await Temperament.findOne({
        where: { name: temp },
      });

      if (!createdTemperament)
        createdTemperament = await Temperament.create({
          id: ide2,
          name: temp,
        });

      await createdDog.addTemperament(createdTemperament);
      // =
      await createdTemperament.addDog(createdDog);
    }
    res.status(200).send("creado");
  } catch (error) {
    next(error);
  }
}
//funciones reductoras
function arrs(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i].name);
  }
  return arr.join(", ");
}

async function resultDog(dogs) {
  for (var dog of dogs) {
    if (typeof dog.id === "number") {
      delete dog.origin;
      delete dog.breed_group;
      delete dog.reference_image_id;
      delete dog.bred_for;
      delete dog.description;
      delete dog.history;
      delete dog.country_code;
      dog.image = dog.image.url;
      dog.weight = dog.weight.metric;
      dog.height = dog.height.metric;
      dog.years = dog.life_span;
    } else {
      delete dog.dataValues.createdAt;
      delete dog.dataValues.updatedAt;
      dog.dataValues.temperament = arrs(dog.dataValues.temperaments);
      delete dog.dataValues.temperaments;
    }
  }
}

module.exports = { dogs, getById, addDog };
