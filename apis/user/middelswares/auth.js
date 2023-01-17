const jwt = require('../modules/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
    checkToken : async (req,res,next) =>{
        let authHeader = req.headers["authorization"];
        let token = authHeader && authHeader.split(" ")[1];
        
        if(!token){
            return res.status(404).json({message : "토큰이 없습니다."});
        }
        const user = await jwt.verify(token);
        if(user === TOKEN_EXPIRED){
            return res.status(400).json({message:"유효기간 만료"});
        }
        if(user===TOKEN_INVALID){
            return res.status(400).json({message:"유효하지 않은 토큰"});
        }
        if(user.id=== undefined){
            return res.status(400).json({message : "회원이 없슈"});
        }
        req.userId = user.id;
        next();
    }
}
module.exports = authUtil;