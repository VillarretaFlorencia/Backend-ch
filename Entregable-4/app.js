const express = require("express");

const routerProducts = require("./src/routes/products.router");
const routerPerfume = require("./src/routes/perfumes.router");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hi",
  });
});
app.use("/api/products", routerProducts);
app.use("/api/perfumes", routerPerfume);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});