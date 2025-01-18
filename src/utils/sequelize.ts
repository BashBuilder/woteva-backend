import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "codelicious",
  process.env.DB_USER || "test",
  process.env.DB_PASSWORD || "test",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
  }
);

export async function checkDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
  } catch (error) {
    if (error instanceof ErrorEvent) {
      console.error("Unable to connect to the database:", error.message);
    }
    console.error("Unable to connect to the database:");
    process.exit(1);
  }
}

export default sequelize;
