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
