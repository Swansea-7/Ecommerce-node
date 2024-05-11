const express = require("express")
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

process.env.SECRET = process.env.SECRET || 'lejtnoqhfrnzdoupbdwintdlhzhelisb'

require("./controllers/productosControllers")(app);
require("./controllers/loginController")(app);

app.listen(3005, ()=>{
    console.log("servidor en puerto 3005")
}
)