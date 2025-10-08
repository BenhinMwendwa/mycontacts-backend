const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:{
        type:String ,
        required:[true , "please add contact name"]
    },
    email:{
        type:String ,
        required:[true , "please add contact email address"]
    },
    phone:{
        type:String ,
        required:[true , "please add contact number"]
    },


},
{
    timestamp:true,
});

module.exports=mongoose.model("contact",contactSchema);