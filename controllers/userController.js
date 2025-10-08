
const asyncHandler=require("express-async-handler");

const registerUser= asyncHandler(async( req,res)=>{
    res.json({message:"register the user"});
});

//post/api/users/login

const loginUser= asyncHandler(async(req,res)=>{
    res.json({message:"login user"});
});




//post/api/users/current
//private


const currentUser= asyncHandler(async(req,res)=>{
    res.json({message:"current user information"});
});

module.exports={registerUser,loginUser,currentUser}