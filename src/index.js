// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("application error",error);
        throw error
     })
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`serve running at : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db failed",err);
})
// import express from "express";

// const app=express();

// ;(async()=>{
//     try{
//        await mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
//        app.on("error",(error)=>{
//         console.log("application error",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`app listein : ${process.env.PORT}`)
//        })
//     }catch(error){
//         console.log("error: ",error);
//         throw err
//     }

// })()