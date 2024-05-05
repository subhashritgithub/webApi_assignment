const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
    }
})
const User=mongoose.model("users",userSchema)
module.exports=User;