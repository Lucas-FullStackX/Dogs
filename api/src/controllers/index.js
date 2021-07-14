const axios = require("axios");
const { URL_API, URL_S } = require("../utils/index");
const { v4: uuidv4 } = require("uuid");
const { Dog, Temperament } = require("../db");

const apiKey = process.env.API_KEY;

function getById(req, res, next) {
  const { id } = req.params;
  if (id.length > 3) {
    Dog.findByPk(id, { include: Temperament })
      .then((results) => {
        const { id, name, height, weight, years, temperaments } = results;
        const temperament = temperaments[0].temperament;
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
/* async function addDog(req, res, next) {
  const { name, weight, height, life_span, temperament } = req.body;
  const image =
    "https://ep01.epimg.net/verne/imagenes/2015/08/04/articulo/1438683590_611299_1438691031_noticia_normal.jpg";
  const ide = uuidv4();

  try {
    const createdDog = await Dog.create({
      id: ide,
      name,
      weight,
      height,
      years: life_span,
      image,
    });
    const newDog = [createdDog];
    for await (const temp of temperament) {
      const ide2 = uuidv4();
      let createdTemperament = await Temperament.findOne({
        where: { name: temp },
      });

      if (!createdTemperament) {
        createdTemperament = await Temperament.create({
          id: ide2,
          name: temp,
        });
      }
      newDog.push(createdTemperament);
    }
    await createdDog.addTemperament(createdTemperament);

    return res.json(newDog);
  } catch (error) {
    next(error);
  }
} */
async function addDog(req, res, next) {
  const { name, weight, height, life_span, temperament } = req.body;

  const ide = uuidv4();
  const image =
    "https://ep01.epimg.net/verne/imagenes/2015/08/04/articulo/1438683590_611299_1438691031_noticia_normal.jpg";
  try {
    const createdDog = await Dog.create({
      id: ide,
      name,
      weight,
      height,
      years: life_span,
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
    res.send("creado");
  } catch (error) {
    next(error);
  }
}
module.exports = { getById, addDog };
