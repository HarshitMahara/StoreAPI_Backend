import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  console.log(req.query);
  const { featured, rating, company, name } = req.query;
  const myQuery = {};
  if (featured) {
    myQuery.featured = featured === "true";
  }
  if (company) {
    myQuery.company = company;
    myQuery.company = { $regex: company, $options: "i" };
  }
  if (rating) {q
    myQuery.rating = Number(rating);
  }
  if (name) {
    myQuery.name = { $regex: name, $options: "i" };
  }
  console.log("myQuery: ", myQuery);
  const products = await Product.find(myQuery);
  res.status(200).json({ nbHits: products.length, products });
};

export const getAllProductsTest = async (req, res) => {
  const products = await Product.find({
    name: { $regex: "vase", $options: "i" },
  });
  res.status(200).json({ nbHits: products.length, products });
};
