const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PWD,{
    host: process.env.HOST,
    dialect: process.env.dialect,
    logging : false,
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize,Sequelize);


module.exports = db;