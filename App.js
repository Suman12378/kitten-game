// app.js backend

const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 

// import all the routes here 

const userRouter = require('./routes/userRoute');
const gameRouter = require('./routes/gameRoute');
const leaderboardRouter = require('./routes/leaderboardRoute');

app.use('/api/v1', userRouter);
app.use('/api/v1', gameRouter);
app.use('/api/v1',leaderboardRouter);
 



module.exports = app; 