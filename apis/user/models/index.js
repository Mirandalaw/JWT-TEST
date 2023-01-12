const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PWD,{
    host: process.env.HOST,
    dialect: process.env.dialect,
    logging : false,
    // operatorsAliases: false,
});

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });
const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize,Sequelize);


module.exports = db;