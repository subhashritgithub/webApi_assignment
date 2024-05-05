const User=require("../models/userModel")


const createContact=async(req,res)=>{
     const  userData=req.body;
     const{name,phone,email}=userData;
     console.log(name,phone,email);
     if(!name || !phone || !email){
        return res.json({
            "success":false,
            "message":"all fields required.."
        })
     }
     try{

        const existingUser=await User.findOne({phone:phone});
        if(existingUser){
            return res.json({
                "success":false,
                "message":`contact with ${phone} is already exits`
            })
        }
        const newContact=new User({
            name:name,
            phone:phone,
            email:email
        })
        await newContact.save();
        return res.json({
            "success":true,
            "message":`new contact created ${phone}`
        })

     }catch(error){
       console.log(error);
       res.json({
        "success":false,
        "message":"Internal server error"
       })

     }
}



module.exports={createContact};