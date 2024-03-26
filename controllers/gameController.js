const GameState = require("../models/gameState");
const User = require("../models/userModel");

const drawCard = async (req, res) => {
    // Implement card drawing logic

    const randomNumber = (Math.floor(Math.random()*100))%4;

    if(randomNumber==0) return res.status(200).json({msg:'Cat Card'});
    if(randomNumber==1) return res.status(200).json({msg:'Exploadin Kitten Card'});
    if(randomNumber==2) return res.status(200).json({msg:'Defusing Card'});
    if(randomNumber==3) return res.status(200).json({msg:'Shuffle Card'});

    
 
    return res.status(200).json({msg:'Hello'});   
};

const updateScore = async (req, res) => {
   
    const { score, winMatch, email } = req.body;

    try {
        // Find the user by email
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Update the user's score and match statistics
        user.score += score;
        user.winMatch += winMatch;
        user.totalMatch += 1;

        // Save the updated user
        await user.save();

        return res.status(200).json({ msg: 'User score updated successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const fetchGameState = async(req, res) => {
     const {id} = req.body;

     try{
          const userState = await GameState.findOne({id});
        
          return res.status(200).json({userState});
     } 
     catch(err){
        return res.status(400).json({msg:'Internal Server Error'});
     }
}

const updateAndCreat = async(req, res) => {
    // console.log(req.body);
    const {remainingCards, bombActive, drawnCards, difuseCards, id} = req.body;

     try{
           let user = await GameState.findOne({id}); 

           if(!user){
               user = new GameState({
                   remainingCards:remainingCards,
                   bombActive:bombActive,
                   difuseCards:difuseCards,
                   drawnCards:drawnCards,
                   id:id
               });
           }
           else{
                user.remainingCards = remainingCards,
                user.bombActive = bombActive,
                user.difuseCards = difuseCards,
                user.drawnCards = drawnCards
           }

               user.save();

               return res.status(200).json({user});

        
     }
     catch(err){
        console.log(err);
        return res.status(400).json({msg:'Internal Server Error'});
     }
}


module.exports = {
    drawCard,
    updateScore,
    fetchGameState,
    updateAndCreat
};