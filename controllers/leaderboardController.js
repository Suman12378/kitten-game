const User = require('../models/userModel');

const getWinnners = async(req, res) => {
    //   console.log('Hello')
    const {email} = req.body;
    try{
        const userRes = await User.find()
                .sort({score:-1, updatedAt: 1})
                .limit(6);

        // console.log(userRes); 

        const myDetails = await User.findOne({email});

        return res.status(200).json({userRes, myDetails});
    } 
    catch(err){
        console.log(err); 
        return res.status(400).json({msg:'there is some Internal Server Error'});
    }
}
 
module.exports = getWinnners 