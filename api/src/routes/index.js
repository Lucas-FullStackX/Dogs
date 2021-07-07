const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getTemperament = require("../controllers/temperament");
const dogController = require("../controllers/dogs");
const router = Router();

router.get("/", dogController.getAll);
router.get("/dogs", dogController.dogs);
router.get("/dog/:page", dogController.pages);
router.get("/dogs/:id", dogController.getById);
router.post("/dog", dogController.addDog);
router.get("/temperament", getTemperament);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
