const knex = require('knex');
const configuration = require('../../knexfile');

//conexão de development
const connection = knex(configuration.development);

module.exports = connection;
