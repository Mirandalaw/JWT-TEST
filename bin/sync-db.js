const models = require('../apis/user/models/index');

module.exports = () =>{
    return models.sequelize.sync({force : false});
}