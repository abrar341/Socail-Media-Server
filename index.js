import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb://127.0.0.1:27017/memories_app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(5001, () =>
      console.log(`Server Running on Port: http://localhost:5001`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
