const {createContact}=require("../controllers/userController");
const router=require("express").Router()


router.post("/users",createContact);


module.exports={router};