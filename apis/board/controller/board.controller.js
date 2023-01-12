const models = require('../models/index');

const showAll = (req,res)=>{
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit,10);
    if(Number.isNaN(limit))return res.status(400).end();
    models.Board.findAll({limit})
        .then(board=>{
            if(board.length===0)return res.status(204).end();
            res.json(board);
        })
};

const showOne = (req,res)=>{
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    models.Board.findOne({where:{id}})
        .then(board=>{
            if(!board) return res.status(404).end();
            res.json(board);
        })
}
const create = (req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;

    models.Board.create({title,content,userId})
        .then(board=>{
            return res.status(201).json(board);
        })
        .catch(err=>{
            console.log(err);
        })
}
const update = (req,res)=>{
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;

    models.Board.findOne({where:{id}})
        .then(board=>{
            board.title = title;
            board.content = content;
            board.userId = userId;

            board.save()
                .then(()=>{
                    res.json(board);
                })
                .catch(err=>{
                    console.log(err);
                })
        })
}
const destroy = (req,res)=>{
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    
    models.Board.destroy({where:{id}})
        .then(board=>{
            if(!board) return res.status(404).end();
            return res.status(204).end();
        })
}

module.exports = {showAll,showOne,create,update,destroy};