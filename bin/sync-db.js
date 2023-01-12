const userModels = require('../apis/user/models/index');
const boardModels = require('../apis/board/models/index');

module.exports ={
    userModels : ()=>{
        return userModels.sequelize.sync({force : false});
    },
    
    boardModels : ()=>{
        return boardModels.sequelize.sync({force:false});
    }
}