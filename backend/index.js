import express from "express";
import dotenv from "dotenv"; 
import dataRouter from "./routers/dataRouter.js"; 
import connectDB from "./config/dbConnection.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.listen(process.env.PORT, () => {
  console.log("SERVER IS LISTENING TO PORT: ", process.env.PORT);
});

app.use("/api", dataRouter);