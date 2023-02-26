const router = require("express").Router();
const PerfumeManager = require("../perfumeManager");

const perfumeManager = new perfumeManager("src/db/perfumes.json");

router.post("/", async (req, res) => {
  await perfumeManager.addPerfume();
  res.status(200).json({ message: "Perfume added" });
});

router.get("/", async (req, res) => {
  const products = await perfumeManager.getPerfumes();
  res.status(200).json({ products });
});

router.get("/:fid", async (req, res) => {
  const fid = Number(req.params.fid);
  const products = await perfumeManager.getPerfumeById(fid);

  if (!products) {
    return res.status(404).json("Perfume not found");
  }

  res.status(200).json({ products });
});

router.post("/:fid/product/:pid", async (req, res) => {
  const fid = Number(req.params.fid),
    pid = Number(req.params.pid);

  await perfumeManager.addProductToPerfume(fid, pid);
  res.status(200).json({ message: "Product added" });
});

module.exports = router;