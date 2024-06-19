const knex = require("../config/conn");

exports.getVentas = (req, res) => {
    knex("ventas")
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((error) => {
        res.status(400).json({ error: error.message });
    });
}

exports.postVentas = (req, res) => {
    const {
        id,
        cliente_id,
        fecha,
        total
    } = req.body
    knex("ventas")
    .insert({
        id: id,
        cliente_id: cliente_id,
        fecha: fecha,
        total: total
    })
    .then(() => {
        knex("ventas")
        .select()
        .then((ventas) => {
            res.json({
                ventas,
                message: `Venta generada con exito`
            });
        })
    })
    .catch((error) => {
        res.status(400).json({ error: error.message });
    });

exports.deleteVenta = (req, res) => {
    const id = req.params.id;
    knex("ventas")
    .where("id", id)
    .del()
    .then(() => {
        knex("ventas")
        .select()
        .then((ventas) => {
            res.json({
            ventas,
            message:`Venta eliminada con exito`
            });
        });
    })
}
}