const Appointmet=require("../models/appointmentModel")



const createAppointment=async(req,res)=>{
 const appointmentData=req.body;
 const {date,time}=appointmentData;

 const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
 const timeFormatRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
 if(!dateFormatRegex.test(date)){
    return res.status(400).json({
        "success":false,
        "message":"Invalid date format."
    })
 }
 const revDate=new Date(date);
 const revDateInSeconds=revDate.getTime()/1000; // convert milliseconds to seconds
 const currentTimeInSeconds=Date.now()/1000;
 if(revDateInSeconds<currentTimeInSeconds){
     return res.json({
        "success":false,
        "message":"Event date is not in the future"
     })
 }




 if(!timeFormatRegex.test(time)){
    return res.status(400).json({
        "success":false,
        "message":"Invalid time format."
    })
 }
 if(time==="15:00"){
    return res.status(400).json({
        "success":false,
        "message":"slot is unavailable at 15:00"
    })
 }
 try {
    const newAppointment=new Appointmet({
        date:date,
        time:time
    });
    await newAppointment.save();
    return res.json({
        "success":true,
        "message":"appointment is made.."
    })

 } catch (error) {
    console.log(error)

 }
}

module.exports={createAppointment};