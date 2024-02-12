const mongoose = require('mongoose');
 const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        
        console.log("mongoose connected successfully",process.env.PORT,process.env.MONGO_URI)

    }catch(err){
        console.log("this is the uri ",process.env.MONGO_URI)
        console.log(`Error ${err.message}`)
    }
}

module.exports=dbConnect;

