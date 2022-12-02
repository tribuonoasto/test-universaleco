const { getDB } = require("../config/mongo");
const { ObjectId } = require("mongodb");

class Customer {
  static async findAll() {
    try {
      const collection = getDB().collection("customers");

      const options = {};

      const customers = await collection.find({}, options).toArray();
      return customers;
    } catch (error) {
      throw error;
    }
  }

  static async findOne(id) {
    try {
      const collection = getDB().collection("customers");

      const options = {};

      const _id = ObjectId(id);

      const customer = await collection.findOne({ _id }, options);
      return customer;
    } catch (error) {
      if (error.name === "BSONTypeError") {
        throw { name: "customer_not_found" };
      } else {
        throw error;
      }
    }
  }

  static async editCustomer(id, payload) {
    try {
      const collection = getDB().collection("customers");
      const _id = ObjectId(id);

      const resp = await collection.updateOne(
        { _id },
        {
          $set: payload,
        }
      );
      return resp;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Customer;
