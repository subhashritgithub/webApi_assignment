const mongoose=require("mongoose");



const appointmentSchema=mongoose.Schema({
   date:{
    type:String,
    required:true
   },
   time:{
    type:String,
    required:true
   }
});
const Appointment=mongoose.model("Appointment",appointmentSchema);
module.exports=Appointment;