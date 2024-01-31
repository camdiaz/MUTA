const dotenv = require('dotenv');
const path = require('path');
const Fs = require('fs');

const localEnv = `environment/.env.${process.env.NODE_ENV}`;

if (Fs.existsSync(localEnv)) {
  dotenv.config({
    path: path.resolve(localEnv)
  });
} else {
  dotenv.config()
}

const env_variables = Object.freeze({
  userName: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  database_port: process.env.DATABASE_PORT,
  logging: (process.env.LOGGING === 'true'),
  ssl: (process.env.SSL === 'true'),
  useUTC: (process.env.USE_UTC === 'true'),
  port: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  NODE_OPTIONS: process.env.NODE_OPTIONS
})

module.exports = env_variables
