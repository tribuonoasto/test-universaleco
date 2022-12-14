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

  static async showCustomer(req, res, next) {
    try {
      const { id } = req.params;

      const customer = await Customer.findOne(id);

      if (!customer) throw { name: "customer_not_found" };

      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  }

  static async editCustomers(req, res, next) {
    try {
      const { id } = req.params;
      const { email, addr, firstName, lastName, gender } = req.body;

      if (!email) {
        throw { name: "invalid_validation", msg: "Email is required" };
      }

      if (!addr) {
        throw { name: "invalid_validation", msg: "Address is Required" };
      }

      if (!firstName) {
        throw { name: "invalid_validation", msg: "First Name is Required" };
      }

      if (!lastName) {
        throw { name: "invalid_validation", msg: "Last Name is Required" };
      }

      if (!gender) {
        throw { name: "invalid_validation", msg: "Gender is Required" };
      }

      const editCus = await Customer.editCustomer(id, {
        email,
        addr,
        firstName,
        lastName,
        gender,
      });

      res.status(200).json({ msg: "Data updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CustomerController;
