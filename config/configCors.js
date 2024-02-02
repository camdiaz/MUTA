const cors = require('cors');
const createError = require('http-errors');

// To conect a service of backend
const BACKEND_WHITELIST = {
    'http://localhost:3001': true,
};

// To conect a service of frontend
const FRONTEND_WHITELIST = {
    'http://localhost:5173': true,
};

const CORS_OPTION = {
    origin: (origin, next) => {
        if ((BACKEND_WHITELIST[origin])||(FRONTEND_WHITELIST[origin]) || !origin) {
            next(null, true);
        } else {
            next(createError(401, 'Not allowed by CORS'));
        }
    },
    maxAge: 86400,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Accept', 'Content-Type', 'authorization', 'Content-Disposition', 'Access-Control-Allow-Origin'],
};

module.exports = () => cors(CORS_OPTION);