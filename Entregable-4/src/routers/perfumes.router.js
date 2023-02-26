const router = require("express").Router();
const PerfumeManager = require("../PerfumeManager");

const perfumeManager = new PerfumeManager("./src//db/perfumes.json");

router.get("/", async (req, res) => {
  const perfumes = await perfumeManager.getPerfumes();
  return await res.status(200).json({ perfumes });
});

router.post("/", async (req, res) => {
  await perfumeManager.addPerfume();
  res.status(200).json({
    message: "Perfume added successfully",
  });
});

router.get("/:fid", async (req, res) => {
  const id = Number(req.params.fid);
  const products = await perfumeManager.getProductsByPerfumeId(id);

  if (!products) {
    return res.status(404).json({
      message: "Perfume not found",
    });
  }

  res.status(200).json({ products });
});

router.post("/:fid/product/:pid", async (req, res) => {
  const perfumeId = Number(req.params.fid);
  const productId = Number(req.params.pid);

  await perfumeManager.addPoductToPerfume(perfumeId, productId);

  res.status(200).json({
    message: "Product added successfully",
  });
});

module.exports = router;