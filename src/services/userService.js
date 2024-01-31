const { User } = require('../models');

async function getUserByUsername(username) {
  return await User.findOne({ where: { username } });
}

async function createUser(userData) {
  return await User.create(userData);
}

module.exports = {
  getUserByUsername,
  createUser,
};
