//agrego middleware
const verificarGet = require('./../middleware/verificarGet')
const verificarToken = require('./../middleware/verificarToken')
//creamos el módulo a exportar
//Al ser llamado en index.js recibe las capacidades de express, para ser utilizado
module.exports = function (app) {
    app.get("/ensalada/:cantidad/:componenteUno/:componenteDos", async function(req, res){
    
        let cantidad = req.params.cantidad
        let componenteUno = req.params.componenteUno
        let componenteDos = req.params.componenteDos
    
        res.send("Tengo, aca sus " + cantidad + " ensaladas " + " con " + componenteUno + " y " + componenteDos)
    })
    
    app.get("/ensalada", async function(req, res){
    
        res.send("una sola ensalada grande")
    })
    
    app.get("/asado", async function(req, res){

        res.send("Tengo y muy bueno")
    })

    app.get("/productos", async function(req, res){

        const productos = require("./../services/productosServices")

        const response = await productos.getProductos()
        
        res.send(response.result)
    })

    app.get("/productos/:id",verificarGet.verificarNumero, async function(req, res){

        let id = req.params.id

        const productos = require("./../services/productosServices")

        const response = await productos.getProductosById(id)
        
        res.send(response.result)
    })

    app.post("/productos",  verificarToken.admin, async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.postProductos(body)
        
        res.send(response.result)
    })
    app.put("/productos", async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.putProductos(body)
        
        res.send(response.result)
    })
    app.patch("/productos", async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.patchProductos(body)
        
        res.send(response.result)
    })
    app.delete("/productos", async function(req, res){

        let body = req.body

        const productos = require("./../services/productosServices")

        const response = await productos.deleteProductos(body)
        
        res.send(response.result)
    })
}
