import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
