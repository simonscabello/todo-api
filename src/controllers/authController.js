const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

exports.register = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const user = await userService.register(name, username, email, password);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userService.login(username, password);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
