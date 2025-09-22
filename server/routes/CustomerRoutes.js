const router = require("express").Router();
const {addCustomer, getCustomers, getOneCustomer, deleteCustomer, editCustomer} = require("../controllers/CustomerControllers");

router.post("/add-customer", addCustomer);
router.get("/customers", getCustomers);
router.get("/customers/:id", getOneCustomer);
router.delete("/customers/:id", deleteCustomer);
router.put("/customers/:id", editCustomer);

module.exports = router;