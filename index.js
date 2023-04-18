import express, { application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const PORT = 3000;

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
// app.use(express.json());

import authRoutes from "./routes/authRoutes.js";

app.use("/in", authRoutes);

mongoose
  .connect(
    "mongodb+srv://hack:***********@cluster.pxp98im.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log("MongoDB Error", error.message));
