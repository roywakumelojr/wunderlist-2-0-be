const knex = require('knex');
const Config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(Config[dbEnv]);
