const express = require("express");
const router = express.Router();

const {
    getAllClientes,
    createCliente,
    updateClientes,
    deleteClientes
} = require("../controllers/clientesControllers");


router.get("/clientes", getAllClientes);
router.post("/clientes/add", createCliente);
router.updateClientes("/clientes/update/:id", updateClientes);
router.delete("/clientes/delete/:id", deleteClientes);

module.exports = router;