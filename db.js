import mongoose from "mongoose";
import "dotenv/config"

const connectToDb = async () => {
    try { 
        await mongoose.connect(process.env.ATLAS_URI)
        console.log("Connected successfully.") 
    } catch (e) {
        console.log(e)
    }
}


export default connectToDb;