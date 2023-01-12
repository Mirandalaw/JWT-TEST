const models = require('../models/index');
const userService  = require('../services/user.services');

const showAll  = async(req,res)=>{
    
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit,10);
    if(Number.isNaN(limit)) return res.status(400).end();
    
    try{
        const user = await userService.getAllUser(limit);
        if(user === null){
            throw {message : "Not Found"};
        }
        return res.status(200).json({status :200 , data : user , message : "Successfully Get All Users"});
    }catch(err){
        return res.status(400).json({status: 400, message : err.message});
    }
};

const showOne = async (req,res)=>{

    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    
    try{
        const user = await userService.getUser(id);
        console.log(user);
        if(user===null){
            throw {message : "찾으려는 정보가 없습니다."};
        }
        return res.status(200).json({status: 200, data: user, message : "Successfully Find an User"});
    }catch(err){
        return res.status(400).json({status: 400, message : err.message});
    }
};

const createUser = async(req,res)=>{
    
    const name = req.body.name;
    const userId = req.body.userId;
    const userPwd = req.body.userPwd;
    try{
        const user = await userService.createUser(name,userId,userPwd);
        return res.status(201).json({status: 201, data :user ,message : "Successfully Create User"});
    }catch(err){
        return res.status(400).json({status:400, message : err.message});
    }
}

const update = async (req,res)=>{
    const id = parseInt(req.params.id);
    if(Number.isNaN(id))return res.status(400).end();
    const name = req.body.name;
    const userId = req.body.userId;
    const userPwd = req.body.userPwd;

    try{
        const user = await userService.updateUser(name,userId,userPwd,id);
        if(user ===null){
            throw {message : "Not Found"};
        }
        console.log(user);
        return res.status(201).json({status : 201 , data : user , message : "Successfully Update User!!"});
    }catch(err){
        return res.status(400).json({status : 400, message :err.message});
    }

    models.User.findOne({where:{id}})
        .then(user=>{
            if(!user) return res.status(404).end();

            user.name = name;
            user.userId = userId;
            user.userPwd = userPwd;

            user.save()
                .then(()=>{
                    res.json(user);
                })
                .catch(err=>{
                    console.log(err);
                })
        })
}
// service 단에서 받아오는 user 는 왜 null 이 아니라 0일까?
const destroy = async (req,res)=>{
    
    const id = parseInt(req.params.id);
    if(Number.isNaN(id))return res.status(400).end();
    try{
        const user = await userService.destroyUser(id);
        if(user===0){
            throw {message : "User Not Found"};
        }
        return res.status(201).json({status : 201, message : "Successfully Destroy User !!"});
    }catch(err){
        return res.status(400).json({status : 400, message : err.message});
    }
}
module.exports = {showAll,showOne,createUser, update, destroy};