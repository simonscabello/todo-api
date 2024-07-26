const User = require('../models/user');

exports.findByUsername = async (username) => {
    return await User.findOne({ where: { username } });
};

exports.findByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

exports.create = async (userData) => {
    return User.create(userData);
};