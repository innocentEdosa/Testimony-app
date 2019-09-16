import dotenv from 'dotenv';

dotenv.config();
module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'Testimony',
    host: process.env.HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'Testimony',
    host: process.env.HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
