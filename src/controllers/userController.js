//HTTP Interaction 
const userService = require('./../services/userService');

// Create user
async function createUser(req, res) {
    try {
        const result = await userService.createUser(req.body.username, req.body.password, req.body.email);
        res.status(200).json({ message: "User created:", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error to create user' });
    }
}

// Loging
async function loginUser(req, res) {
    try {
        const { token, error } = await userService.validateUser(req.body.username, req.body.password);
        if (error) {
            return res.status(401).json({ error });
        }
        res.status(200).json({ message: "Token expire in 12 hours:", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login error.' });
    }
}

module.exports = {
    createUser,
    loginUser
};
