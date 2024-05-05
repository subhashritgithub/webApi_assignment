const{createReservation}=require("../controllers/reservationController");
const reservationRouter=require("express").Router()

reservationRouter.post("/reservations",createReservation);


module.exports={reservationRouter};