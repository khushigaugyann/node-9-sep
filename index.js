const express = require('express');
const app = express();
const user = require('./routes/user');

app.use(user);

app.listen(3000, (err)=>{
    if(err){
        comsole.log("Error....")
    }else{
        console.log("Server is running on 3000...");
    }
})

//localhost:3000/users