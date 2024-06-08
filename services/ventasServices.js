//requerimos el módulo para conectarse a la base de datos
const mysql = require('mysql')
//requerimos el archivo donde tenemos configurada la conexion
const conn = require('../config/conn')
//creamos la constante a ser exportada
const usuarios = {
    async postVentas(nuevo) {

        let sql = "INSERT INTO `ecommerce`.`ventas` ( `id` , `cliente_id`, `total`)VALUES (NULL , '"+ nuevo.cliente_id + "', '"+ nuevo.total +"'); SELECT LAST_INSERT_ID() AS id;"

        let resultado = await conn.query(sql)
        let response = {result: "venta generada"}

        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status:400}
        }else if (resultado.length > 0) {
            let ventaId = resultado[0].insertId            

            let sql = "INSERT INTO `detalles_ventas`( `venta_id`, `producto_id`, `cantidad`, `precio`, `subtotal`) VALUES "

            let coma = ""

            for (let index = 0; index < nuevo.productos.length; index++) {

                let consulta = "(" + ventaId + ","+ nuevo.productos[index].producto_id + "," + nuevo.productos[index].cantidad + "," + nuevo.productos[index].precio + ",244)"
                sql = sql + coma +  consulta
                coma = ","
            }

             let resultadoDos = await conn.query(sql)

            response = {result: resultadoDos, status: 201}
        }
        return response
    },
        //dentro de ella ponemos una funcion asincrona, porque no sabemos cuanto demora la base en responder
        async getVentas () {

            //Guardamos en una variable la consulta que queremos generar
            let sql = 'SELECT * FROM usuarios'
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
    
        async getVentasById (id) {
    
            let sql = 'SELECT * FROM usuarios WHERE id = ' + id
            let resultado = await conn.query(sql)
            let response = {error: "No se encontraron registros"}
            if(resultado.code) {
                response = {result: "Error en la consulta SQL", status:400}
            }else if (resultado.length > 0) {
                response = {result: resultado, status:200}
            }
            return response
        },
    
}
//Exportamos el módulo
module.exports = usuarios
