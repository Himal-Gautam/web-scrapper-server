import express from "express";
import Product from "../models/product.js";
// import auth from '../middleware/auth.js'
const router = new express.Router();

router.get("/products", async (req, res) => {
  try {
    let product = await Product.find({})
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

// {"username" : {$regex : "son"}}

router.post("/get-products", async (req, res) => {
  console.log(req.body)
  try {
    const product = await Product.find({'title': { $regex: req.body.searchString , $options: 'i' }});
    console.log([...new Map(product.map((item) => [item["title"], item])).values(),])
    res.status(201).send([...new Map(product.map((item) => [item["title"], item])).values(),]);
  } catch (e) {
    res.status(500).send(e);
  }
});

//GET /tasks?completed=true
//GET /tasks?limit=10&skip=10
//GET /tasks?sortBy=createdAt:desc
// router.get("/products", async (req, res) => {
//   const match = {};
//   const sort = {};

//   if (req.query.completed) {
//     match.completed = req.query.completed === "true";
//   }

//   if (req.query.sortBy) {
//     const parts = req.query.sortBy.split(":");
//     sort[parts[0]] = parts[1] == "desc" ? -1 : 1;
//   }

//   try {
//    
//     res.send(products);
//     console.log(products);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

export default router;
