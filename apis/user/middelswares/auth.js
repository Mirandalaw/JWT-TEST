const jwt = require('../modules/jwt');
const models = require('../models/index');
const service = require('../services/user.services');

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
    checkToken : async (req,res,next) =>{
        const userId = req.params.userId;
        const {token} = req.cookies.token;
        const accessToken = token;
        const findUser = await models.User.findOne({where:{userId}});
        const refreshToken = findUser.refreshToken;
        
        if(!accessToken&&!refreshToken){
            return res.status(404).json({message : "토큰이 없습니다."});
        }
        const user = await jwt.verify(accessToken);
        const refresh = await jwt.refreshVerify(refreshToken);
        if(user === TOKEN_EXPIRED){
            if(refresh!==TOKEN_EXPIRED&&refresh!==TOKEN_INVALID) {
                let accToken = jwt.sign(findUser);
                res.cookie('token',accToken);
                res.redirect('/check/complete');
            }
        }
        if(user!==TOKEN_INVALID&&user!==TOKEN_EXPIRED){
            if(refresh===TOKEN_EXPIRED||refresh===TOKEN_INVALID){
                let refToken = jwt.createRefreshToken();
                findUser.refreshToken=refToken;
                findUser.save();
                res.redirect('/check/complete');
            }
        }
        if(user.id=== undefined){
            return res.status(400).json({message : "회원이 없슈"});
        }
        req.userId = user.id;
        next();
    }
}
module.exports = authUtil;