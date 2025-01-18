import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "codelicious", // Database name
  process.env.DB_USER || "test", // Database user
  process.env.DB_PASSWORD || "test", // User password
  {
    host: process.env.DB_HOST || "localhost", // Host
    port: Number(process.env.DB_PORT) || 3306, // Port
    dialect: "mysql", // Dialect
    logging: false, // Disable logging for cleaner output
  }
);

export default sequelize;
