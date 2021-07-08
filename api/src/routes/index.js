const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getTemperament = require("../controllers/temperament");
const dogController = require("../controllers/dogs");
const router = Router();
const { getById, addDog } = require("../controllers/index");
const { getAll, dogs, pages } = require("../controllers/dogs");

router.get("/", getAll);
router.get("/dogs", dogs);
router.get("/dog/:page", pages);
router.get("/dogs/:id", getById);
router.get("/temperament", getTemperament);
router.post("/dog", addDog);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
