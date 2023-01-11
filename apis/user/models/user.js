module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user',{
        name :{
            type: DataTypes.STRING,
            allowNull : false,
        },
        userId : {
            type: DataTypes.STRING,
            allowNull : false,
            unique : true,
        },
        userPwd : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    })
}