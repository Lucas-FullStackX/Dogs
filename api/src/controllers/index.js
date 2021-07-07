const axios = require("axios");
const { URL_API, URL_S } = require("../utils/index");
const { v4: uuidv4 } = require("uuid");

class MoldelCrud {
  constructor(model) {
    this.model = model;
  }
  getById = (req, res, next) => {
    const { id } = req.params;
    const myDog = this.model.findAll();
    const apiDogs = axios.get(URL_S + id);
    Promise.all([myDog, apiDogs])
      .then((results) => {
        const [myResults, apiResults] = results;
        const response = myResults.concat(apiResults.data);
        let arr = [];
        response.map((p) =>
          arr.push({
            id: p.id,
            name: p.name,
            temperament: p.temperament,
            weight: p.weight,
            height: p.height,
            years: p.life_span,
          })
        );
        res.send(arr);
      })
      .catch((err) => next(err));
  };
  addDog = (req, res, next) => {
    const body = req.body;
    const uuid = uuidv4();
    return this.model
      .create({
        ...body,
        id: uuid,
      })
      .then((d) => res.send(d))
      .catch((err) => next(err));
  };
}

module.exports = MoldelCrud;
