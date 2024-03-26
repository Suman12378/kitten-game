const jwt = require('jsonwebtoken');

const protectRoute= async (req,res,next)=>{
    console.log(req.headers);
    if(req.headers.authorization)
    {
        console.log(req.headers.authorization);
        let isVerifiedUser = jwt.verify(req.headers.authorization,process.env.JWT_KEY);
        if(isVerifiedUser){
            next();
        }
        else{
            return res.json({
                message:"User is not verified"
            })
        }
    }
    else
    {
      return res.json({
        message:"Operation not allowed"
      })
        
    }
}

module.exports = protectRoute