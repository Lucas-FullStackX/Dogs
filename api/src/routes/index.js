const { Router } = require("express");
const axios = require("axios");
const { URL_API, URL_S } = require("../utils/index");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, temperament } = require("../db");
const dogController = require("../controllers/dogs");
const router = Router();

router.get("/", dogController.getAll);
router.get("/dogs", dogController.dogs);
router.get("/dog/:page", dogController.pages);
router.get("/dogs/:name", (req, res, next) => {
  const { name } = req.params;
  return Dog.findAll(name)
    .then((d) => res.send(d))
    .catch((err) => next(err));
  /* res.send("Muy bien, lo arreglaste 🥳"); */
});
router.post("/dog", dogController.addDog);
router.get("/temperament", (req, res, next) => {
  const myDog = Dog.findAll();
  const apiDogs = axios.get(URL_API);
  Promise.all([myDog, apiDogs])
    .then((results) => {
      const [myResults, apiResults] = results;
      let response = myResults.concat(apiResults.data);
      let temperaments = [];
      for (let i = 0; i < response.length; i++) {
        temperaments.push(response[i].temperament);
      }
      temperaments = temperaments.join(",");
      let uniqueList = temperaments
        .split(",")
        .filter(function (item, i, allItems) {
          return i == allItems.indexOf(item);
        });
      res.json(uniqueList.map((p) => p.trim()));
    })
    .catch((err) => next(err));
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
