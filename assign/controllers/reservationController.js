const Reservation=require("../models/reservationModel");

const createReservation=async(req,res)=>{
     const reservationData=req.body;
     const{userId,eventDate,numberOfGuests}=reservationData;
     if(parseInt(numberOfGuests)<=0){
        return res.json({
            "success":false,
            "message":"Number of guest should be a positive integer"
        })
     }

     if(!userId || !eventDate || !numberOfGuests){
        return res.json({
            "success":false,
            "message":"all fields are required.."
        })
     }
     
     const revDate=new Date(eventDate);
     const revDateInSeconds=revDate.getTime()/1000; // convert milliseconds to seconds
     const currentTimeInSeconds=Date.now()/1000;
     if(revDateInSeconds<currentTimeInSeconds){
         return res.json({
            "success":false,
            "message":"Event date is not in the future"
         })
     }
     

     try{
       const newReservation=new Reservation({
        userId:userId,
        eventDate:eventDate,
        numberOfGuests:numberOfGuests
       });

       await newReservation.save();
       return res.json({
            "succcess":true,
            "message":"reservation is made.."
       });

       
     }catch(error){
        console.log(error);
        return res.json({
            "success":false,
            "message":"server error"
        })
     }
}



module.exports={createReservation};