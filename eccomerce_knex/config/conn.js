const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'ecommerce'
  }
});

module.exports = knex;