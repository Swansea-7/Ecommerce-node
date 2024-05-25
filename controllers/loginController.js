//creamos el módulo a exportar
//Al ser llamado en index.js recibe las capacidades de express, para ser utilizado
module.exports = function (app) {
    app.post("/login", async function(req, res) {
        //tomamos datos del body
        const validar = req.body
        const login = require("./../services/loginServices")
        const response = await login.postLogin(validar)
        if (response.error) {
            res.send(response.error)
        } else{
            res.send({ "token" : response.result}) 
        }
    })
<<<<<<< HEAD
};
=======
}
>>>>>>> main
