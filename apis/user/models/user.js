module.exports = (sequelize, DataTypes) =>{
    const user = sequelize.define('user',{
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
        },
        refreshToken : {
            type : DataTypes.STRING,
            allowNull : true,
            validate : {
                notEmpty : true,
            }
        }
    })

    user.associate = models =>{
        user.hasOne(models.Board, {foreignKey : "userId",sourceKey : "userId"});
    }
    return user;
}