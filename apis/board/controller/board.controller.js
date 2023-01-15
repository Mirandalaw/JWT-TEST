const boardService = require("../services/board.services");

const showAll = async (req,res)=>{
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit,10);
    if(Number.isNaN(limit))return res.status(400).end();
    
    try{
        const board = await boardService.getAllBoard(limit);
        if(board === null){
            throw {message : "Not Found Borad"};
        }
        return res.status(200).json({status:200,data : board, message : "Successfully find all borad"});
    }catch(err){
        return res.status(400).json({status:400,message: err.message});
    }
};

const showOne = async (req,res)=>{
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    try{
        const board = await boardService.getBoard(id);
        if(board ===null){
            throw {message : "찾으려는 정보가 없습니다."};
        }
        return res.status(200).json({status : 200, data: board, message : "Successfully find a board"});
    }catch(err){
        return res.status(400).json({status : 400, message : err.message});
    }
};
const createBoard = async(req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;

    try{
        const board = await boardService.createBoard(title,content,userId);
        return res.status(201).json({status : 201, data: board, message : "Successfully create a board"});
    }catch(err){
        return res.status(400).json({status : 400, message : err.message});
    }
}
const updateBoard = async (req,res)=>{
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;

    try{
        const board = await boardService.updateBoard(id,title,content,userId);
        if(board ===null){
            throw {message : "Not Found"};
        }
        return res.status(201).json({status : 201, data : board, message : "Successfully update board!!"});
    }catch(err){
        return res.status(400).json({status : 400, message : err.message});
    }
}
const destroyBoard = async(req,res)=>{
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id))return res.status(400).end();
    
    try{
        const board = await boardService.destroyBoard(id);
        if(board ===0){
            throw {message : "User Not Found"};
        }
        return res.status(201).json({status : 201, message : "Successfully destroy board!!"});
    }catch(err){
        return res.status(400).json({status : 400, message : err.message});
    }
}

module.exports = {showAll,showOne,createBoard,updateBoard,destroyBoard};