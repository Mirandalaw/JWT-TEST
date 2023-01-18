const randToken = require('rand-token');
const jwt = require('jsonwebtoken');
const { decode } = require('jsonwebtoken');
const secretKey = require('../../../config/secretKey').secretKey;
const options = require('../../../config/secretKey').options;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

//토큰 생성  (accessToken)
const sign = async (user) => {
    const payload = {
        id : user.userId,
        name : user.name,
    };
    const result = {
        token : jwt.sign(payload,secretKey,options),
    };
    return result;
};
//refresh 토큰 생성
const createRefreshToken = async () =>{
    const result = 
        jwt.sign({},secretKey,{
            algorithm : 'HS256',
            expiresIn : '14d',
        })
    return result;
};
//refreshtoken 검증
const refreshVerify = async (token,userId) =>{
    let decoded;
    try {
        decoded = jwt.verify(token,secretKey);
        return decoded;
    } catch (error) {
        if(error.message === 'jwt expired'){
            console.log('expired RefreshToken!');
            return TOKEN_EXPIRED;
        }else if(error.message ==='invalid token'){
            console.log('invaild token');
            return TOKEN_INVALID;
        }else {
            console.log('invalid token');
            return TOKEN_INVALID;
        }
        return decoded;
    }
}
const verify = async(token) =>{
    let decoded;
    try {
        decoded =  jwt.verify(token,secretKey);
        return decoded;
    } catch (error) {
        if(error.message ==='jwt expired'){
            console.log('expired token');
            return TOKEN_EXPIRED;
        }else if(error.message ==='invalid token'){
            console.log('invalid token');
            return TOKEN_INVALID;
        }else {
            console.log('invalid token');
            return TOKEN_INVALID;
        }
        return decoded;
    }
}

module.exports = {sign,verify,createRefreshToken,refreshVerify};