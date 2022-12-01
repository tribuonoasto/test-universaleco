const { getDB } = require("../config/mongo");

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
}

module.exports = Customer;
