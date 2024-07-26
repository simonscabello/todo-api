const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');

exports.register = async (name, username, email, password) => {
    const existingUserByUsername = await userRepository.findByUsername(username);
    if (existingUserByUsername) {
        throw new Error('Username already exists');
    }

    const existingUserByEmail = await userRepository.findByEmail(email);
    if (existingUserByEmail) {
        throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.create({ name, username, email, password: hashedPassword });
};

exports.login = async (username, password) => {
    const user = await userRepository.findByUsername(username);
    if (!user || !await bcrypt.compare(password, user.password)) {
        throw new Error('Invalid credentials');
    }
    return user;
};
