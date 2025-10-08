
// const {constants} =require("../middleware/constant")
// const errorHandler =(err,req,res,next)=>{
//     const statuscode =res.statuscode? res.statusCode :500;
//     switch(statuscode){
//         case constants.VALIDATION_ERROR:
//             res.json({
//                 title:"validation Failed",
//                 message: err.message,
//                 stackTrace:err.stack,
//             })
//             break;
//          case constants.UNAUTHORIZED:
//             res.json({
//                 title:"unauthorized",
//                 message: err.message,
//                 stackTrace:err.stack,
//             })    
//         case constants.NOT_FOUND:
//                 res.json({ title:"Not Found" ,
//                     message:err.message,
//                     stackTracer:err.stack})
//             default:
//                 console.log("No error")
//                 break;
//     }
    
        
// }    
// module.exports=errorHandler;
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    res.status(statusCode).json({
        success: false,
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = errorHandler;
