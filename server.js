const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Sneakers", category: "Shoes", price: 80 },
  { id: 3, name: "Coffee Mug", category: "Kitchen", price: 12 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 900 },
  { id: 5, name: "Backpack", category: "Accessories", price: 45 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});