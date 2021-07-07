const axios = require("axios");
const { Dog } = require("../db");
const ModelCrud = require("./index");
const { URL_API, URL_S } = require("../utils/index");

class DogModel extends ModelCrud {
  constructor(model) {
    super(model);
  }
  getAll = (req, res, next) => {
    const myDog = this.model.findAll();
    const apiDogs = axios.get(URL_API);
    Promise.all([myDog, apiDogs])
      .then((results) => {
        const [myResults, apiResults] = results;
        const response = myResults.concat(apiResults.data);
        res.send(response);
      })
      .catch((err) => next(err));
  };
  dogs = (req, res, next) => {
    const name = req.query.name;
    const myDog = this.model.findAll();
    if (name) {
      const apiDogsFil = axios.get(URL_S + name);
      Promise.all([myDog, apiDogsFil])
        .then((resultsF) => {
          const [myResultsFil, apiResultsFil] = resultsF;
          const responseFil = myResultsFil.concat(apiResultsFil.data);
          return res.send(responseFil);
        })
        .catch((err) => next(err));
    }
    const apiDogs = axios.get(URL_API);
    Promise.all([myDog, apiDogs])
      .then((results) => {
        const [myResults, apiResults] = results;
        const response = myResults.concat(apiResults.data);
        return res.json(response.slice(0, 8));
      })
      .catch((err) => next(err));
  };

  pages = (req, res, next) => {
    const { page } = req.params;
    const myDog = this.model.findAll();
    const apiDogs = axios.get(URL_API);
    Promise.all([myDog, apiDogs])
      .then((results) => {
        const [myResults, apiResults] = results;
        const response = myResults.concat(apiResults.data);
        res.send(response.slice(8 * (page - 1), 8 * page));
      })
      .catch((err) => next(err));
  };
}

const dogController = new DogModel(Dog);

module.exports = dogController;
