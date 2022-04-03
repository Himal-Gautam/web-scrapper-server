import express from "express";
import "./db/mongoose.js";
import "./scripts/scrapper.js";

import chalk from "chalk";
import cors from "cors";
import "dotenv/config";

import productRouter from "./routers/product.js";
import { append } from "cheerio/lib/api/manipulation";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(productRouter);

app.get("/", async (req, res) => {
  response.send("Hello World");
});

app.listen(port, () => {
  console.log(
    chalk.magenta.bold.underline("Server is up on port ") +
      chalk.blue.bold.underline(port)
  );
});

