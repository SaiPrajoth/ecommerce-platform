const asyncHandler = (fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(err=>{
        res.status(500).json({"error happened here":error.message})
    })
}

module.exports=asyncHandler;

// same as 

// const asyncHandler = (fn) => {
//     return async (req, res, next) => {
//         try {
//             await fn(req, res, next);
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     };
// };
