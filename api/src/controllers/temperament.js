const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { URL_API } = require("../utils/index");
const { v4: uuidv4 } = require("uuid");
const apiKey = process.env.API_KEY;

module.exports = function getTemperament(req, res, next) {
  const temps = Temperament.findAll();
  Promise.all([temps])
    .then((element) => {
      if (element[0].length > 0) {
        return res.json(element[0]);
      }
      const apiDogs = axios.get(`${URL_API}?api_key=${apiKey}`);
      const myDog = Dog.findAll();
      Promise.all([myDog, apiDogs]).then((results) => {
        const [myResults, apiResults] = results;
        let response = myResults.concat(apiResults.data);
        let tempArray = [];
        for (let dog of response) {
          for (let key in dog) {
            if (key === "temperament") {
              tempArray.push(dog[key]);
            }
          }
        }
        let newArr = tempArray.join(", ").split(", ");
        let uniqueTemp = [...new Set(newArr)];
        var tempsArr = [];
        uniqueTemp.forEach((item) => {
          const id = uuidv4();
          tempsArr.push({
            id,
            name: item,
          });
        });
        Temperament.bulkCreate(tempsArr)
          .then(() => {
            return Temperament.findAll();
          })
          .then((result) => {
            return res.json(result);
          })
          .catch((error) => next(error));
      });
    })
    .catch((err) => next(err));
};
