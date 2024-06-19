
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const clientesRoutes = require("./routes/clientesRoutes");
const productosRoutes = require("./routes/productosRoutes");
const ventasRoutes = require("./routes/ventasRoutes");
const loginRoutes = require("./routes/loginRoutes");


const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);
app.use('/ventas', ventasRoutes);
app.use('/auth', loginRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`El servidor se escucha en el puerto ${port}`);
});