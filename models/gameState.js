//GameStateModel.js


const mongoose = require('mongoose');

const gameStateSchema = new mongoose.Schema({
     remainingCards:{
         type:Number,
         required:true,
     },
     bombActive:{
        type:Boolean,
        required:true,
     },
     difuseCards:{
        type:Number,
        required:true,
     },
     drawnCards:[{
     }],
     id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
     }
});

const GameState = mongoose.model('GameState', gameStateSchema);

module.exports = GameState;