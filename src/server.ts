import express, { Request, Response } from "express";
import { testConnection } from "./utils/test-db";

const app = express();

const port: number = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});

app.get("/health", async (req: Request, res: Response) => {
  const test = await testConnection();
  res.send(`Backend is live ${test}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
