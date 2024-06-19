const knex = require("../config/conn");

exports.getAllClientes = (req, res) => {
    knex("clientes")
    .then((resultado) => {
        res.json(resultado)
    })
    .catch((error) => {
        res.status(400).json({ error: error.message });
    })

exports.createCliente = (req, res) => {
    const {
        nombre,
        email,
        direccion,
        telefono
    } = req.body;
    knex("clientes")
    .insert({
        nombre: nombre,
        email: email,
        direccion: direccion,
        telefono: telefono
    })
    .then(() => {
        knex("clientes")
        .select()
        .then((clientes) => {
            res.json({
                clientes,
                message: `Cliente agregado con exito`
            })
        })
    })
    .catch((error) => {
        res.status(400).json({ error: error.message })
    })
}

exports.updateClientes = (req, res) => {
    const id = Number(req.params.id);
    const {
        nombre,
        email,
        direccion,
        telefono
    } = req.body;
    knex("clientes")
    .where("id", id)
    .update({
        nombre: nombre,
        email: email,
        direccion: direccion,
        telefono: telefono
    })
}

exports.deleteClientes = (req, res) => {
    const id = req.params.id;
    knex("clientes")
    .where("id", id)
    .del()
    .then(() => {
        knex("clientes")
        .select()
        .then((clientes) => {
            res.json({
                clientes,
                message: `Cliente eliminado con exito ${id}`
            });
        });
    })
    .catch((error) => {
        res.status(400).json({ error: error.message })
    });
}
} 