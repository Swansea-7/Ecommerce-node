const express = require("express");
const router = express.Router();
const { 
    getProductos,
    addProductos,
    updateProductos,
    deleteProductos
 } = require("../controllers/productosControllers");

router.get("/productos", getProductos);
router.post("/productos", addProductos);
router.delete("/productos/delete/:id", deleteProductos)
router.put("/productos/edit/:id", updateProductos);


module.exports = router;