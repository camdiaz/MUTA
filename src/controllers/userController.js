//HTTP Interaction

const userService = require('../services/userService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwt = process.env.SECRET_KEY;

async function createUser(req, res) {
  try {
    const { username, password } = req.body;

    // Verify is user exists
    const existingUser = await userService.getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    // Hash of password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      username,
      password: hashedPassword,
    };

    const createdUser = await userService.createUser(newUser);
    res.status(201).json({ message: 'User created successfully', user: createdUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user.' });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Verify if the user is already existing
    const user = await userService.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Compare passwords
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error logging in.' });
  }
}

module.exports = {
  createUser,
  login,
};
