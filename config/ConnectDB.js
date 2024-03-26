const mongoose = require("mongoose");
exports.connectDB = async() => {
    mongoose
            .connect(process.env.MONGO_URI)
            .then(()=> {
                console.log("MongoDB connected Successfully");
            })
            .catch((error)=>{
                console.log(error); 
            })
};
 

// As0G2LGhverQfSaB