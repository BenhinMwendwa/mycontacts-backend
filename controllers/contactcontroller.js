const  asyncHandler=require("express-async-handler")

//get all contact

//@route Get/api/contcats
//@access public


const getContacts=asyncHandler (async (req, res) => {
  res.status(200).json({
    message: "get all contacts"
  });
});

const getContact= asyncHandler (async (req, res) => {
  res.status(200).json({
    message: `get contact for ${params.id}`
  });
});


//post
const createContact=asyncHandler (async ( req, res)=>{
    console.log("the request body is" ,req.body);//body needed inorder to create new contacts
  const{name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(400)
    throw new Error ("requires all fields")
  }
    res.status(201).json({
    message:"create contacts"
});
});

//put
const updateContact= asyncHandler (async (req,res)=>{

res.status(200).json({
    message:`update contacts for ${req.params.id}`
});
});

//delete


const deleteContact=asyncHandler (async (req,res)=>{

res.status(200).json({
    message:`delete contacts for ${req.params.id}`
});
});

module.exports={getContacts,getContact,createContact,updateContact,
    deleteContact
}