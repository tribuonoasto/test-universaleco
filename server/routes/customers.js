const express = require("express");
const CustomerController = require("../controllers/customerController");
const router = express.Router();

router.get("/", CustomerController.showAllCustomers);
router.get("/:id", CustomerController.showCustomer);
router.put("/:id", CustomerController.editCustomers);

module.exports = router;
