import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Prize"],
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "nilkamal", "pepperfry", "durian"],
      message: "{VALUE} not supported as company name",
    },
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  //   timestamp: true,
});

export const Product = mongoose.model("Product", productSchema);
