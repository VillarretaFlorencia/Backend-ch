const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  products: { type: Array, default: [] },
});

const perfumeModel = mongoose.model("Perfumes", perfumeSchema);

module.exports = perfumeModel;