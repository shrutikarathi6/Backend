import { asynchandler } from "../utils/asynchandler";
const registeruser = asynchandler( async (req,res)=>{
    res.status(200).json({
        message:"ok"
    })
})
export {registeruser}