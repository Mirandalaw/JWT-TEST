const app = require('../index');
const syncDb = require('./sync-db');
require('dotenv').config();

syncDb().then(()=>{
    console.log('Sync database!');
    app.listen(process.env.PORT,()=>{
        console.log(`The Server is listening`);
    })
})