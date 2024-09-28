import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionI = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongo connected !!!! :${connectionI.connection.host}`)
    } catch (error) {
        console.log("MOngodb showing error", error);
        process.exit(1);
    }
}
export default connectDB