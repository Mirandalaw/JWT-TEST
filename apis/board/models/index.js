const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USERNAME,process.env.DB_PWD,{
    host : process.env.HOST,
    dialect : process.env.dialect,
    logging : false,
});

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Board = require('./board')(sequelize,Sequelize)

module.exports = db;
