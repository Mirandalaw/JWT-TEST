const models = require('../models/index');

const getAllBoard = async(limit) =>{
    try{
        const board = await models.Board.findAll({limit});
        return board;
    }catch(err){
        throw Error('Error while finding all board');
    }
}

const getBoard = async(id) =>{
    try{
        const board = await models.Board.findOne({where:{id}});
        return board;
    }catch(err){
        throw Error("Error while finding board!! ");
    }
}
const createBoard = async (title,content,userId) =>{
    try{
        const board = await models.Board.create({title,content,userId});
        return board;        
    }catch(err){
        throw Error('Error while Creating Board');
    }
}

// 문제점 update 는 동작하나 data를 받아오는 과정에서 undefined 
const updateBoard = async (id,title,content,userId) =>{
    try {
        const board =  await models.Board
        .findOne({where : {id}})
            .then(board => {
                board.title = title;
                board.content = content; 
                board.userId = userId;

                board.save();
                return board;
            })
    }catch(err){
        console.log(err);
        throw Error ("Error while Updating Borad");
    }
}

const destroyBoard = async(id) =>{
    try{
        const board = await models.Board.destroy({where : {id}});
        return board;
    }catch(err){
        console.log(err);
        throw Error("Error while destroying Board");
    }
}
module.exports = {getAllBoard,getBoard,createBoard,updateBoard,destroyBoard};