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

  static async editCustomers(req, res, next) {
    try {
      const { id } = req.params;
      const { email, addr } = req.body;

      if (!email) {
        throw { name: "invalid_validation", msg: "email invalid" };
      }

      if (!addr) {
        throw { name: "invalid_validation", msg: "address invalid" };
      }

      const editCus = await Customer.editCustomer(id, { email, addr });

      res.status(200).json({ msg: "Data updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CustomerController;
