const express = require("express");
const CustomerController = require("../controllers/customerController");
const router = express.Router();

router.get("/", CustomerController.showAllCustomers);
router.post("/edit/:id", CustomerController.editCustomers);

module.exports = router;
