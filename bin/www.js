const app = require('../index');
const syncDb = require('./sync-db');
require('dotenv').config();


syncDb.userModels().then(()=>{
    console.log('Sync User database!');
})
syncDb.boardModels().then(()=>{
    console.log('Sync Board database!');
})

app.listen(process.env.PORT,()=>{
    console.log(`The Server is listening`);
})