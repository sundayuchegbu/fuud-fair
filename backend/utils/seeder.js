import { Product } from "../models/Product.js";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import fs from "fs";
const products = JSON.parse(fs.readFileSync("backend/data/products.json"));

// Setting Dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDB();

const seedProduct = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are add.");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProduct();
