module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define('user',{
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
    Users.associate = models =>{
        Users.haseOne(models.Board , {foreignKey : "userId",sourceKey : "userId"});
    }
}