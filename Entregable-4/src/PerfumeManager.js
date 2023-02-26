const fs = require("fs");
const ProductManager = require("./productManager");

const productManager = new ProductManager("./db/products.json");

class PerfumeManager {
  constructor(path) {
    this.path = path;
    this.perfumes = [];
  }

  getPerfumes = async () => {
    try {
      const perfumesDb = await fs.readFile(this.path, "utf-8");
      return JSON.parse(perfumesDb);
    } catch (error) {}
  };

  addPerfume = async () => {
    try {
      const perfumesDb = await this.getPerfumes();
      const id = await this.generateNewId();

      perfumesDb.push({ id, products: [] });
      await fs.writeFile(this.path, JSON.stringify(perfumesDb));
      return "Perfume added succesfully";
    } catch (error) {
      console.error(error);
    }
  };

  getProductsByPerfumeId = async (id) => {
    try {
      const perfumesDb = await this.getPerfumes();
      const perfumesFiltered = perfumesDb.find((perfume) => perfume.id === id).products;
      return perfumesFiltered;
    } catch (error) {
      console.error(error);
    }
  };

  addPoductToPerfume = async (fid, pid) => {
    const product = await productManager.getProductById(pid);
    const perfume = await this.getProductsByPerfumeId(fid);

    if (perfume.some((item) => item.product === product.id)) {
      const index = perfume.findIndex((item) => item.product === product.id);
      perfume[index].quantity++;
    }
  };

  /* ****************Support functions***************** */
  async generateNewId(perfumes) {
    try {
      if (perfumes.length === 1) {
        return 1;
      }
      return perfumes[perfumes.length - 1].id + 1;
    } catch (error) {}
  }
}

module.exports = PerfumeManager;