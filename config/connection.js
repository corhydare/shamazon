// const Sequelize = require("sequelize");
// require("dotenv").config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: process.env.DB_HOST,
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }

// module.exports = sequelize;

require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("tech_blog_db", "root", "a", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
