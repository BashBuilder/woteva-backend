import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sequelize, {
  checkDatabaseConnection,
  initSequelize,
} from "./utils/sequelize";
import cors from "cors";
import authRoutes from "./routes/auth.route";

dotenv.config();
const app = express();

const port = process.env.PORT;

initSequelize();

app.use(
  express.json({
    limit: "5mb",
  })
);
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth", authRoutes);

app.get("/health", async (req: Request, res: Response) => {
  res.send(`Backend is live `);
});

checkDatabaseConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
