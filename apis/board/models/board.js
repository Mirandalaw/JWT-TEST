module.exports = (sequelize,DataTypes)=>{
    const Board =  sequelize.define('Board',{
        title : {
            type : DataTypes.STRING,
            allowNull : false,    
        },
        content : {
            type:DataTypes.STRING(1000),
            allowNull : true,
        },
        userId : {
            type:DataTypes.STRING,
            allowNull : false,
        }
        
    })
    Board.associate = models =>{
        Board.belongTo(models.Users, {foreignKey : "userId",sourceKey : "userId"});
    }
    return Board;
}
