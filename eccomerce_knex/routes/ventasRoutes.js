const express = require("express");
const router = express.Router();

const {
    getVentas,
    postVenta,
    deleteVenta
} = require("../controllers/ventasControllers");

router.get("/ventas", getVentas);
router.post("/ventas/add", postVenta);
router.delete("/ventas/delete/:id", deleteVenta);

module.exports = router;