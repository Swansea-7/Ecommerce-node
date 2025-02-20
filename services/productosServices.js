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
        let response =  {result: resultado}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status:200}
        }
        return response
    },
    async getProductosTodos () {

        //Guardamos en una variable la consulta que queremos generar
        let sql = 'SELECT * FROM productos'
        //Con el archivo de conexion a la base, enviamos la consulta a la misma
        //Ponemos un await porque desconocemos la demora de la misma
        let resultado = await conn.query(sql)
        let response = {result: "No se encontraron registros"}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status:200}
        }
        return response
    },

    async getProductosById (id) {

        let sql = 'SELECT * FROM productos WHERE activo = 1 AND id = ' + id
        let resultado = await conn.query(sql)
        let response = {result: "No se encontraron registros"}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status:200}
        }
        return response
    },

    async postProductos(body) {

        let sql = "INSERT INTO `productos`( `nombre`, `precio`,`stock`,  `categoria_id`, `activo`) VALUES ('" + body.nombre + "','" + body.precio + "','" + body.stock + "','" + body.categoria_id + "','" + body.activo + "')"
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "usuario creado"}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status: 201}
        }
        return response
    },

    async putProductos(body) {

        let sql = "UPDATE `productos` SET `nombre`='" + body.nombre + "',`descripcion`='"+ body.descripcion + "',`stock`='" + body.stock + "',`activo`='" + body.activo + "' WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "usuario creado"}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status:205}
        }
        return response
    },
    async patchProductos(body) {

        let sql = "UPDATE `productos` SET `nombre`='" + body.nombre + "' WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "usuario creado"}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status:205}
        }
        return response
    },
    async deleteProductos(body) {

        let sql = "UPDATE `productos` SET `activo`=" + body.activo + " WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "usuario creado"}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status:200}
        }
        return response
    },
}
//Exportamos el módulo
module.exports = productos

