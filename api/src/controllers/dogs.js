const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { URL_API, URL_S } = require("../utils/index");
const apiKey = process.env.API_KEY;

function getAll(req, res, next) {
  const myDog = Dog.findAll();
  const apiDogs = axios.get(`${URL_API}?api_key=${apiKey}`);
  Promise.all([myDog, apiDogs])
    .then((results) => {
      const [myResults, apiResults] = results;
      const response = myResults.concat(apiResults.data);
      res.send(response);
    })
    .catch((err) => next(err));
}
function dogs(req, res, next) {
  const name = req.query.name;
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
        return res.json(find.slice(0, 8));
      }
      resultDog(response);
      return res.json(response.slice(0, 8));
    })
    .catch((err) => next(err));
}

function pages(req, res, next) {
  const { page } = req.params;
  const myDog = Dog.findAll();
  const apiDogs = axios.get(`${URL_API}?api_key=${apiKey}`);
  Promise.all([myDog, apiDogs])
    .then((results) => {
      const [myResults, apiResults] = results;
      const response = myResults.concat(apiResults.data);
      resultDog(response);
      res.json(response.slice(8 * (page - 1), 8 * page));
    })
    .catch((err) => next(err));
}
//funcion rductora
function resultDog(dogs) {
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
    } else {
      delete dog.dataValues.createdAt;
      delete dog.dataValues.updatedAt;
      dog.dataValues.temperament = dog.dataValues.temperaments[0].temperament;
      delete dog.dataValues.temperaments;
    }
  }
}

module.exports = { getAll, dogs, pages, resultDog };
