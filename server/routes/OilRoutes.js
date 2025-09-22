const router = require("express").Router();
const { addOil, getOils, getOneOil, deleteOil, editOil } = require("../controllers/OilControllers");

router.post("/add-oil", addOil);
router.get("/oils", getOils);
router.get("/oils/:id", getOneOil);
router.delete("/oils/:id", deleteOil);
router.put("/oils/:id", editOil);

module.exports = router;