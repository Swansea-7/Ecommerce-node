const knex = require("../config/conn")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  await knex("users")
    .where("email", email)
    .then(async (usuarioDB) => {
      let usuario = usuarioDB[0];
      console.log(usuario);
      const validPassword = await bcrypt.compare(
        password,
        usuario.password
      );
      if (!validPassword) {
        return res.status(400).json({ error: "Contraseña no valida" });
      }
      const token = jwt.sign(
        {
          usuario: usuario.usuario,
          id: usuario.id,
        },
        TOKEN_SECRET
      );
      res.json({ error: null, data: "Login exitoso", token });
    });
};