const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController.js")



/*Rutas de acceso*/

router.get("/",mainController.Home);
router.get("/crearProducto",mainController.crearProducto);


router.post("/crearProducto",mainController.crearProducto);

router.delete("/eliminarProducto/:id",mainController.eliminarProducto);
router.put("/actualizarProducto/:id",mainController.actualizarProducto);

//Debo exportar el modulo de rutas
module.exports = router;