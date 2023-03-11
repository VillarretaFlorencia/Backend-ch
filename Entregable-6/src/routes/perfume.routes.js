const router = require("express").Router();
const PerfumeManager = require("../dao/mongo/perfumeManager");

const perfumeManager = new PerfumeManager();

router.get("/", async (req, res) => {
  try {
    const perfumes = await perfumeManager.getPerfumes();
    return res.status(200).json({
      message: "Perfumes",
      perfumes,
    });
  } catch (error) {
    console.log("🚀 ~ file: perfumes.routes.js:10 ~ router.get ~ error:", error);
  }
});

router.get("/:fid", async (req, res) => {
  try {
    const { fid } = req.params;
    const perfume = await perfumeManager.getPerfumeById(fid);

    if (!perfume) {
      return res.status(404).json({
        message: "Perfume not found",
      });
    }

    return res.status(200).render("perfume", { perfume });
  } catch (error) {
    console.log("🚀 ~ file: perfumes.routes.js:22 ~ router.get ~ error:", error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createPerfume = await perfumeManager.addPerfume();

    return res.status(200).json({
      message: "Perfume created",
      createPerfume,
    });
  } catch (error) {
    console.log("🚀 ~ file: perfumes.routes.js:40 ~ router.post ~ error:", error);
  }
});

router.post("/:fid/product/:pid", async (req, res) => {
  try {
    const { fid, pid } = req.params;

    const addProductToPerfume = await perfumeManager.addProductToPerfume(pid, fid);

    return res.status(200).json({
      message: `Product added to perfume`,
      pid,
      fid,
    });
  } catch (error) {
    console.log("🚀 ~ file: perfumes.routes.js:53 ~ router.post ~ error:", error);
  }
});

module.exports = router;