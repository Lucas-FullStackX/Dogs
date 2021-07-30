const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getTemperament = require("../controllers/temperament");
const router = Router();
const { dogs, getById, addDog } = require("../controllers/dogs");

router.get("/dogs", dogs);
router.get("/dogs/:id", getById);
router.get("/temperament", getTemperament);
router.post("/dog", addDog);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
