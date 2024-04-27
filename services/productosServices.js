//requerimos el módulo para conectarse a la base de datos
const mysql = require('mysql')
//requerimos el archivo donde tenemos configurada la conexion
const conn = require('../config/conn')

//creamos la constante a ser exportada
const productos = {

    //dentro de ella ponemos una funcion asincrona, porque no sabemos cuanto demora la base en responder
    async getProductos () {

        //Guardamos en una variable la consulta que queremos generar
        let sql = 'SELECT * FROM productos WHERE activo = 1'
        //Con el archivo de conexion a la base, enviamos la consulta a la misma
        //Ponemos un await porque desconocemos la demora de la misma
        let resultado = await conn.query(sql)
        let response = {error: "No se encontraron registros"}
        if(resultado.code) {
            response = {error: "Error en la consulta SQL"}
        }else if (resultado.length > 0) {
            response = {result: resultado}
        }
        return response
    },

    async getProductosById (id) {

        let sql = 'SELECT * FROM productos WHERE activo = 1 AND id = ' + id
        let resultado = await conn.query(sql)
        let response = {error: "No se encontraron registros"}
        if(resultado.code) {
            response = {error: "Error en la consulta SQL"}
        }else if (resultado.length > 0) {
            response = {result: resultado}
        }
        return response
    },

    async postProductos(body) {

        let sql = "INSERT INTO `productos`( `nombre`, `descripcion`, `stock`, `activo`) VALUES ('" + body.nombre + "','" + body.descripcion + "','" + body.stock + "','" + body.activo + "')"
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {error: "usuario creado"}
        if(resultado.code) {
            response = {error: "Error en la consulta SQL"}
        }else if (resultado.length > 0) {
            response = {result: resultado}
        }
        return response
    },

    async putProductos(body) {

        let sql = "UPDATE `productos` SET `nombre`='" + body.nombre + "',`descripcion`='"+ body.descripcion + "',`stock`='" + body.stock + "',`activo`='" + body.activo + "' WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {error: "usuario creado"}
        if(resultado.code) {
            response = {error: "Error en la consulta SQL"}
        }else if (resultado.length > 0) {
            response = {result: resultado}
        }
        return response
    },
    async patchProductos(body) {

        let sql = "UPDATE `productos` SET `nombre`='" + body.nombre + "' WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {error: "usuario creado"}
        if(resultado.code) {
            response = {error: "Error en la consulta SQL"}
        }else if (resultado.length > 0) {
            response = {result: resultado}
        }
        return response
    },
    async deleteProductos(body) {

        let sql = "UPDATE `productos` SET `activo`=" + body.activo + " WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {error: "usuario creado"}
        if(resultado.code) {
            response = {error: "Error en la consulta SQL"}
        }else if (resultado.length > 0) {
            response = {result: resultado}
        }
        return response
    },
}
//Exportamos el módulo
module.exports = productos
