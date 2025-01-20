import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT)!,
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

export function initSequelize() {
  sequelize
    .sync()
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error("Unable to connect to the database", err));
}
export default sequelize;
