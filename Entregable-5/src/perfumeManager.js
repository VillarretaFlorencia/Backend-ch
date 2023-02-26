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
      const db = await fs.readFile(this.path, "utf-8");
      const parseDb = JSON.parse(db);
      console.log(parseDb);
      return parseDb;
    } catch (error) {
      console.log(error);
    }
  };

  getPerfumeById = async (id) => {
    try {
      const db = await this.getPerfumes();
      const filteredDb = db.find((perfume) => perfume.id === id).products;
      console.log(filteredDb);
      return filteredDb;
    } catch (error) {
      console.log(error);
    }
  };

  addPerfume = async () => {
    try {
      const db = await this.getPerfumes();
      const id = await this.newId(db);

      //Adding our erfume to the array
      db.push({ id, products: [] });
      //Overwritting our file
      await fs.writeFile(this.path, JSON.stringify(db));
      console.log("Perfume added");
      return db;
    } catch (error) {
      console.log(error);
    }
  };

  addProductToPerfume = async (fid, pid) => {
    const db = await this.getPerfumes();
    const id = await this.newId(db);

    //Adding the perfume to the array
    db.push({ id, products: [] });
    //Parsing our new data
    const newDb = JSON.stringify(db);
    //Overwritting our original file
    await fs.writeFile(this.path, newDb);
    console.log(db);
    return db;
  };

  //   Support functions

  newId = async (perfumes) => {
    try {
      if (perfumes.legth === 1) return 1;
      return perfumes[perfumes.length - 1].id + 1;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = PerfumeManager;