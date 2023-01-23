const models = require('../models/index');
const jwt = require('../modules/jwt');

/**
 * 모든 유저 검색 메소드 : getAllUser
 * @param {Number} limit - query params
 * @returns {JSON} This is the result - User Data 
 */
const getAllUser = async (limit) => {
    try {
        const users = await models.User.findAll({limit});
        return users;
    } catch (err) {
        throw Error('Error while Finding All User');
    }
}

/**
 * 선택 유저 검색 메소드 : getUser
 * @param {Number} id - query params
 * @returns {JSON}  This is the result - User Data
 */
const getUser = async(id) =>{
    try{
        const users = await models.User.findOne({where:{id}});
        return users;
    }catch(err){
        throw Error("Error while finding user!! ");
    }
}
/**
 * 유저 정보를 만드는 메소드 : createUser
 * @param {string} name - req.body -> name 
 * @param {string} userId - req.body -> userId
 * @param {string} userPwd - req.body -> userPwd
 * @returns {JSON} This is result - User Data
 */
const createUser = async (name,userId,userPwd) =>{
    try{
        const users = await models.User.create({name,userId,userPwd})
        return users;        
    }catch(err){
        throw Error('Error while Creating Users');
    }
}
/**
 * 유저 정보 수정 메소드 : updateUser
 * @param {string} name - req.body -> name
 * @param {string} userId - req.body -> userId
 * @param {string} userPwd - req.body -> userPwd
 * @param {Number} id - req.params
 */
const updateUser = async (name,userId,userPwd,id) =>{
    try {
        const users =  await models.User
        .findOne({where : {id}})
            .then(users => {
                users.name = name;
                users.userId = userId;
                users.userPwd = userPwd;

                users.save();
                return users;
            })
            // 문제점 update 는 동작하나 data를 받아오는 과정에서 undefined 
    }catch(err){
        console.log(err);
        throw Error ("Error while Updating User");
    }
}
/**
 * 유저 정보를 삭제하는 메소드 : destroyUser
 * @param {String||Number} id 
 * @returns {JSON} - This is result - User Data
 * 선택한 유저를 전부 삭제한다는 단점이 있음.
 */
const destroyUser = async(id) =>{
    try{
        const user = await models.User.destroy({where : {id}});
        return user;
    }catch(err){
        console.log(err);
        throw Error("Error while destroying User");
    }
}
/**
 * 로그인 시 유저 정보 확인 및 토큰 발행 : loginUser
 * @param {string} userId - req.body -> userId
 * @param {string} userPwd - req.body -> userPwd
 * @returns {JSON} - This is result - User token
 */
const loginUser = async(userId,userPwd)=>{
    try {
        const user = await models.User.findOne({where :{userId}});
        if(user.userId===userId){
            if(user.userPwd==userPwd){
                const token = await jwt.sign(user);
                const refreshToken = await jwt.createRefreshToken();
                user.refreshToken = refreshToken;
                user.save();

                return token;
            }
        }
    } catch (error) {
        console.log(err);
        throw Error("Error while login");
    }
}
module.exports = {getAllUser,getUser,createUser,updateUser,destroyUser,loginUser};