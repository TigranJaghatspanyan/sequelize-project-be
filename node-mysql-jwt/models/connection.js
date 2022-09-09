import Sequelize from "sequelize";
import config from "../config/database.js";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
    operatorsAliases: "false",
    logging: false,
  }
);

export default sequelize;
