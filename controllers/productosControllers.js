//agrego middleware
const verificarGet = require('./../middleware/verificarGet')
const verificarToken = require('./../middleware/verificarToken')
//creamos el módulo a exportar
//Al ser llamado en index.js recibe las capacidades de express, para ser utilizado
module.exports = function (app) {

    app.get("/productos", async function(req, res){

        const productos = require("./../services/productosServices")

        const response = await productos.getProductos()
        
        res.status(response.status).send(response.result)
    })

    app.get("/productostodos", verificarToken.verificar, verificarToken.admin, async function(req, res){

        const productos = require("./../services/productosServices")

        const response = await productos.getProductosTodos()
        
        res.status(response.status).send(response.result)
    })

    app.get("/productos/:id",verificarGet.verificarNumero, async function(req, res){

        let id = req.params.id

        const productos = require("./../services/productosServices")

        const response = await productos.getProductosById(id)
        
        res.status(response.status).send(response.result)
    })

    app.post("/productos", verificarToken.verificar, verificarToken.admin, async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.postProductos(body)
        
        res.status(response.status).send(response.result)
    })
    app.put("/productos", async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.putProductos(body)
        
        res.status(response.status).send(response.result)
    })
    app.patch("/productos", async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.patchProductos(body)
        
        res.status(response.status).send(response.result)
    })
    app.delete("/productos", async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.deleteProductos(body)
        
        res.status(response.status).send(response.result)
    })
}
