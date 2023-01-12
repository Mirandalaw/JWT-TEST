const models = require('../models/index');


const showAll  = (req,res)=>{
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit,10);
    if(Number.isNaN(limit)) return res.status(400).end();
    models.User.findAll({limit})
        .then((user)=>{
            if(user.length===0) return res.status(204).end();
            res.json(user);
        })
};

const showOne = (req,res)=>{
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    models.User.findOne({where:{id}})
        .then(user =>{
            if(!user)return res.status(404).end();
            res.json(user);
        })
};

const create = (req,res)=>{
    const name = req.body.name;
    const userId = req.body.userId;
    const userPwd = req.body.userPwd;
    // models.User.findOrCreate({where:{userId}}) 리펙토링 하기
    models.User.findOne({where: {userId}})
        .then(user=>{
            if(user.userId===userId) return res.status(404).json("ID가 중복입니다.");
            else {
                console.log(user);
                models.User.create({name,userId,userPwd})
                    .then(user=>{
                        return res.status(201).json(user);
                    })
                    .catch(err=>{
                        if(err.name ==='SequelizeUniqueConstraintError'){
                            return res.status(409).end();
                        }
                        res.status(500).end();
                    })
            }
        })
}

const update = (req,res)=>{
    const id = parseInt(req.params.id);
    if(Number.isNaN(id))return res.status(400).end();
    const name = req.body.name;
    const userId = req.body.userId;
    const userPwd = req.body.userPwd;
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

const destroy = (req,res)=>{
    const id = parseInt(req.params.id);
    if(Number.isNaN(id))return res.status(400).end();
    models.User.destroy({where : {id}})
        .then((user)=>{
            if(!user) return res.status(404).end();
            return res.status(204).end();
        })
}
module.exports = {showAll,showOne,create, update, destroy};