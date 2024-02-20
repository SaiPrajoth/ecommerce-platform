
const asyncHandler = require("../middlewares/asyncHandler")

const createUser = asyncHandler(async(req,res)=>{
    res.json("hello");
})

module.exports=createUser;