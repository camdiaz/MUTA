// All about logic
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function createUser(username, password, email) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return await User.create({ username, password: hashedPassword, email });
}

async function validateUser(username, password) {
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return { error: 'User not found. Please try again.' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return { error: 'Incorrect password. Please, try again.' };
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '12h' });
    return { token };
}

module.exports = {
    createUser,
    validateUser
};
