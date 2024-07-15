import express from "express";
import "dotenv/config";
import dbConnect from "./dbConnect.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import "express-async-errors";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1>");
});
app.use("/api/v1/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

(async () => {
  try {
    await dbConnect(process.env.MONGO_URL);
    console.log(`Database Connected...`);
    app.listen(port, console.log(`Server is running...`));
  } catch (error) {
    console.log("Error in DB Connect", error);
  }
})();

// this is a test commit
