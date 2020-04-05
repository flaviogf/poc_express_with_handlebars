require("dotenv/config");

module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  storage: process.env.DB_STORAGE,
  dialect: process.env.DB_DIALECT,
};
