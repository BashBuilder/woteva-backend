import express, { Request, Response } from "express";
import { testConnection } from "./utils/test-db";
import dotenv from "dotenv";
import sequelize, { checkDatabaseConnection } from "./utils/sequelize";
import cors from "cors";

dotenv.config();
const app = express();

const port = process.env.PORT;

sequelize
  .sync()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Unable to connect to the database", err));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});

app.get("/health", async (req: Request, res: Response) => {
  const test = await testConnection();
  res.send(`"Backend is live ${test} `);
});

checkDatabaseConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
