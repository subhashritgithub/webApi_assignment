const express=require("express")
const dotenv=require("dotenv").config()
const connectDatabase=require('./database/database');
const {router}=require("./routes/userRoutes");
const{reservationRouter}=require("./routes/reservationRoutes");
const{appointmentRoute}=require("./routes/appointmentRoutes");
const app=express()
const PORT=process.env.PORT
app.use(express.json());
connectDatabase();

app.use("/api",router);
app.use("/api",reservationRouter);
app.use("/api",appointmentRoute);


app.listen(PORT,()=>{
console.log("Server is running on the port: ",PORT);
});