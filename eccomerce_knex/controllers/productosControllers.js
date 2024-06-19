
const knex = require("../config/conn");

exports.getProductos = (req, res) => {
    knex("productos")
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((error) => {
        res.status(200).json({error: error.message });
    })

}

exports.addProductos = (req, res) => {
    const {
        nombre,
        precio,
        stock,
        categoria_id,
    } = req.body;
    knex("productos")
    .insert({
      nombre: nombre,
      precio: precio,
      stock: stock,
      categoria_id: categoria_id,
    })
    .then(() => {
        knex("productos")
        .select()
       .then((productos) => {
          res.json({
            productos,
            message: `Se agrego la propiedad correctamente`,
          });
        });
        })
        .catch((error) => {
         res.status(400).json({ error: error.message });
    })
    
    exports.deleteProductos = (req, res) => {
        const id = req.params.id;
        knex("productos")
        .where("id", id)
        .del()
        .then(() => {
            knex("productos")
            .select()
            .then((productos) => {
                res.json({
                    productos,
                    message: `Producto eliminado con exito ${id}`
                });

            });
        })
        .catch((error) => {
            res.status(400).json({ error: message.error })
        });
    }

    exports.updateProductos = (req, res) => {
        const id = Number(req.params.id);
        console.log(id);
        const {
            nombre: nombre,
            precio: precio,
            stock: stock,
            categoria_id: categoria_id,
        } = req.body;
        knex("productos")
        .where("id", id)
        .update({
            id: id,
            nombre: nombre,
            precio: Number(precio),
            stock: Number(stock),
            categoria_id: categoria_id,
        })
        .then(() => {
            knex("prodcutos")
            .select()
            .then((productos) => {
                res.json({
                    productos,
                    message: `el producto ha sido modificado ${id}`
                });

            });
        })
        .catch((error) => {
            res.status(400).json({ error: error.message})
        });
    }
   
}

