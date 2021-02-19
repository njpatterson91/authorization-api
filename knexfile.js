//checking
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB;

module.exports = {
  development: {
    client: "pg",
    connection: DB,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
