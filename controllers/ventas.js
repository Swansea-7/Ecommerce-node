module.exports = function (app) {
   
    app.get("/ventas", async function(req, res){

        const ventas = require("./../services/servicesVentas")

        const response = await ventas.getVentas()
        
        res.send(response.result)
    });


    app.get("/ventas/:id", async function(req, res){

        let id = req.params.id

        const ventas = require("./../services/servicesVentas");

        const response = await ventas.getVentasById(id)
        
        res.send(response.result)
    });


app.post("/ventas/:id", async function(req, res){

        let body = req.body

        const ventas = require("./../services/servicesVentas")

        const response = await ventas.postServices(body)
        
        res.send(response.result)
    });


app.put("/ventas", async function(req, res){

        let body = req.body

        const ventas = require("./../services/servicesVentas")

        const response = await ventas.putVentas(body)
        
        res.send(response.result)
    });


    app.patch("/ventas", async function(req, res){

        let body = req.body

        const ventas = require("./../services/servicesVentas")

        const response = await ventas.patchVentas(body)
        
        res.send(response.result)
    });

    
    app.delete("/ventas", async function(req, res){

        let body = req.body

        const ventas = require("./../services/servicesVentas")

        const response = await ventas.deleteVentas(body)
        
        res.send(response.result)
    });
};