import express from "express";


const router =express.Router();


router.get("/send",(req,res)=>{
    console.log("message sent");
});




export default router;