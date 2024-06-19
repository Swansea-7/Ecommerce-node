const mysql = require('mysql')
const conn = require('../config/conn')

const clientes = {

    async getClientes () {
        let sql = 'SELECT * FROM clientes WHERE activo = 1'
        let resultado = await conn.query(sql)
        let response = {result: "No se encontraron registros", status: 200}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status: 400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status: 200}
        }
        return response
    },

    async getClientesById (id) {
        let sql = 'SELECT * FROM clientes WHERE activo = 1 AND id = ' + id
        let resultado = await conn.query(sql)
        let response = {result: "No se encontraron registros", status: 200}
        if(resultado.code) {}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status: 400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status: 200}
        }
        return response
    },

    async postClientes(body) {
        console.log(body)
        let sql = "INSERT INTO `clientes`( `nombre`, `email`, `direccion`, `telefono`, `activo`) VALUES ('" + body.nombre + "','" + body.email + "', '" + body.direccion + "','" + body.telefono + "','" + body.activo + "')"
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "cliente creado", status: 200}
        if(resultado.code) {}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status: 400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status: 201}
        }
        return response
    },

    async putClientes(body) {
        let sql = "UPDATE `clientes` SET `nombre`='" + body.nombre + "',`email`='"+ body.email + "', `direccion`='"+ body.direccion + "',`telefono`='" + body.telefono + "',`activo`='" + body.activo + "' WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "cliente modificado", status: 200}
        if(resultado.code) {}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status: 400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status: 205}
        }
        return response
    },

    async patchClientes(body) {
        let sql = "UPDATE `clientes` SET `nombre`='" + body.nombre + "' WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "cliente modificado", status: 200}
        if(resultado.code) {}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status: 400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status: 205}
        }
        return response
    },

    async deleteClientes(body) {
        let sql = "UPDATE `clientes` SET `activo`=" + body.activo + " WHERE id =" + body.id
        console.log(sql)
        let resultado = await conn.query(sql)
        let response = {result: "cliente eliminado", status: 200}
        if(resultado.code) {}
        if(resultado.code) {
            response = {result: "Error en la consulta SQL", status: 400}
        }else if (resultado.length > 0) {
            response = {result: resultado, status: 200}
        }
        return response
    },
}

module.exports = clientes;
