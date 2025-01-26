import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sequelize, { checkDatabaseConnection } from "./utils/sequelize";
import cors from "cors";
import authRoutes from "./routes/auth.route";
// import { initUserModel } from "./model/user.model";

dotenv.config();
const app = express();

const port = process.env.PORT;

sequelize
  .sync()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Unable to connect to the database", err));
// initUserModel(sequelize);

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
