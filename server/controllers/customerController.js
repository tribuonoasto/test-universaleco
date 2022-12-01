"use strict";

const Customer = require("../models/customer");

class CustomerController {
  static async showAllCustomers(req, res, next) {
    try {
      const customers = await Customer.findAll();

      if (!customers || customers.length <= 0)
        throw { name: "customer_not_found" };
      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CustomerController;
