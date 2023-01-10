const { Sequelize } = require('Sequelize'); // ORM es  
// crear una instancia con parametros de config. de nuestra base de datos:
// un objeto de configuracion  --> credenciales de mi base de datos
const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost",  // 127.0.0.1 es lo mismo que localhost
  port: "5433",
  password: "041213",
  dialect: "postgres" // la base de datos que estamos usando
});

module.exports = db;
