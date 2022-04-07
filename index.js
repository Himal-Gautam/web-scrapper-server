import express from "express";
import "./src/db/mongoose.js";
import "./src/scripts/scrapper.js";

import chalk from "chalk";
import cors from "cors";
import "dotenv/config";

import productRouter from "./src/routers/product.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(productRouter);

app.get("/", async (req, res) => {
  res.send("Wellcome to Web Scrapper Server");
});

app.listen(port, () => {
  console.log(
    chalk.magenta.bold.underline("Server is up on port ") +
      chalk.blue.bold.underline(port)
  );
});

