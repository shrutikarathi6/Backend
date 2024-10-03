import {v2 as cloudinary} from "cloudinary"
import * as fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret
});


const uploadcloudinary = async (localfilepath)=>{
    try{
        if(!localfilepath) return null;

        const res = await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        })

        // file upload suceess
        console.log("upload successfully",res.url);
        return res;


    }catch(error){
        fs.unlinkSync(localfilepath) //remove local saved temprerary file as upload operation failed
        return null;
    }
}

export {uploadcloudinary}

