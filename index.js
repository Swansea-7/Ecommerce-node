const express = require("express")
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
process.env.SECRET = process.env.SECRET || 'lejtnoqhfrnzdoupbdwintdlhzhelisb';

require("./controllers/productosControllers")(app);
require("./controllers/loginController")(app);
=======
require("dotenv").config()
>>>>>>> main

process.env.SECRET = process.env.SECRET || 'lejtnoqhfrnzdoupbdwintdlhzhelisb'

require("./controllers/productosControllers")(app);
require("./controllers/loginController")(app);

let port = process.env.PORT

app.listen(port, ()=>{
    console.log("servidor en puerto " + port)
}
);