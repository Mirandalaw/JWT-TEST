module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('Board',{
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
}
