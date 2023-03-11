const perfumeModel = require("../models/perfume.model");
const productModel = require("../models/product.model");

class PerfumeManager {
  getPerfumes = async () => {
    try {
      const perfumes = await perfumeModel.find({});
      return perfumes;
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:8 ~ PerfumeManager ~ getPerfumes= ~ error:",
        error
      );
    }
  };

  getPerfumeById = async (fid) => {
    try {
      const perfume = await perfumeModel.findById(fid);

      if (!perfume) return null;
      
      return perfume.products;
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:21 ~ PerfumeManager ~ getPerfumesById= ~ error:",
        error
      );
    }
  };

  addPerfume = async (perfumeData) => {
    try {
      const newPerfume = await perfumeModel.create(perfumeData);
      return newPerfume;
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:33 ~ PerfumeManager ~ addPerfume= ~ error:",
        error
      );
    }
  };

  addProductToPerfume = async (pid, fid) => {
    try {
      const product = await perfumeModel.findById(pid);
      const perfume = await productModel.findById(fid);

      perfume.products.push(product);
      perfume.save();
      return perfume;
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:45 ~ PerfumeManager ~ addProductToPerfume=async ~ error:",
        error
      );
    }
  };
}

module.exports = PerfumeManager;