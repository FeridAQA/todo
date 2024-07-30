const User = require("../models/user.model");

const ttUser = ['ferid', "ehmed"]

const findAll = async () => {
    const users = await ttUser
    return users
}
const findByUsername = async (username) => {
    let user = await User.findOne({ where: { username } });
    return user;
  };

module.exports = {
    findAll
}