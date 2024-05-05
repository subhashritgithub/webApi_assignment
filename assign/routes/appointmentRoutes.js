const {createAppointment}=require("../controllers/appointmentController");
const appointmentRoute=require("express").Router();

appointmentRoute.post("/book-appointment",createAppointment);

module.exports={appointmentRoute};


