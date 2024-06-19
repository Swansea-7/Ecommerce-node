// agrego middleware
const verificarGet = require('../middleware/verificarGet')
const verificarToken = require('../middleware/verificarToken')

module.exports = function (app) {
   
    app.get("/clientes", verificarToken.verificar, verificarToken.admin, async function(req, res){

        const clientes = require("../services/clientesServices")

        const response = await clientes.getClientes()
        
        res.status(response.status).send(response.result)
    })


    app.get("/clientes/:id", verificarGet.verificarNumero, verificarToken.verificar, verificarToken.admin, async function(req, res){

        let id = req.params.id

        const clientes = require("../services/clientesServices")

        const response = await clientes.getClientesById(id)
        
        res.status(response.status).send(response.result)
    })


    app.post("/clientes", verificarToken.verificar, verificarToken.admin, async function(req, res){

        let body = req.body

        const clientes = require("../services/clientesServices")

        const response = await clientes.postClientes(body)
        
        res.status(response.status).send(response.result)
    })


    app.put("/clientes", verificarToken.verificar, verificarToken.admin, async function(req, res){

        let body = req.body

        const clientes = require("../services/clientesServices")

        const response = await clientes.putClientes(body)
        
        res.status(response.status).send(response.result)
    })


    app.patch("/clientes", verificarToken.verificar, verificarToken.admin,  async function(req, res){

        let body = req.body

        const clientes = require("../services/clientesServices")

        const response = await clientes.patchClientes(body)
        
        res.status(response.status).send(response.result)
    })

    
    app.delete("/clientes", verificarToken.verificar, verificarToken.admin, async function(req, res){

        let body = req.body

        const clientes = require("../services/clientesServices")

        const response = await clientes.deleteClientes(body)
        
        res.status(response.status).send(response.result)
    })
}
