const Users = require('../models/users.model');

//clases POO:
class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw new error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(user) {
    try {
      const result = Users.create(user);
      return result;
    }
    catch (error) {
      throw error;
    }
  }
}

// function getAll() {

// }
module.exports = UserServices;