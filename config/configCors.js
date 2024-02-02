const cors = require('cors');
const createError = require('http-errors');

// Configuración de listas blancas
const BACKEND_WHITELIST = {
    'http://localhost:3001': true,
};
const FRONTEND_WHITELIST = {
    'http://localhost:5173': true,
};

const CORS_OPTION = {
    origin: (origin, callback) => {
        if (BACKEND_WHITELIST[origin] || FRONTEND_WHITELIST[origin] || !origin) {
            callback(null, true); // Permite la solicitud
        } else {
            callback(createError(401, 'Not allowed by CORS')); // Bloquea la solicitud
        }
    },
    maxAge: 86400,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization', 'Content-Disposition', 'Access-Control-Allow-Origin'],
    exposedHeaders: ['Authorization'],
};

module.exports = () => cors(CORS_OPTION);
