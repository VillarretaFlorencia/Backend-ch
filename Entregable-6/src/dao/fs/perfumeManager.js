const fs = require("fs");
const ProductManager = require("./productManager");
const { Module } = require("module");

const productManager = new ProductManager("../../db/products.json");

class PerfumeManager {
  constructor(path) {
    this.path = path;
    this.perfumes = [];
  }

  getPerfumes = async () => {
    try {
      const db = await fs.readFile(this.pathm, "utf-8");
      const parseDb = JSON.parse(db);

      console.log(parseDb);
      return parseDb;
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:16 ~ PerfumeManager ~ getPerfumes=async ~ error:",
        error
      );
    }
  };

  getPerfumeById = async (fid) => {
    try {
      const db = this.getPerfumes();
      const filterDb = db.find((perfume) => perfume.id === id).products;

      console.log(filterDb);
      return filterDb;
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:31 ~ PerfumeManager ~ getPerfumeById=async ~ error:",
        error
      );
    }
  };

  addPerfume = async () => {
    try {
      const db = await this.getPerfumes();
      const id = await this.newId(db);
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:46 ~ PerfumeManager ~ addPerfume=async ~ error:",
        error
      );
    }
  };

  //   **********Support Functions************
  newId = async (perfumes) => {
    try {
      if (perfume.length === 1) return 1;
      return perfumes[perfume.length - 1].id + 1;
    } catch (error) {
      console.log(
        "🚀 ~ file: perfumeManager.js:59 ~ PerfumeManager ~ newId= ~ error:",
        error
      );
    }
  };
}

module.exports = PerfumeManager;