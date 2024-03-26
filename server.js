//  server.js starting point of backend

const express = require('express');
const app = require('./App');
const {connectDB} = require('./config/ConnectDB')





// call mongo db connection function
connectDB();  

if(process.env.NODE_ENV==='production'){
     app.use(express.static("frontend/build"));
}

const port = process.env.PORT || 4000; 


const server = app.listen(port, ()=>{
     console.log(`Server is working on http://localhost:${port}`);
})