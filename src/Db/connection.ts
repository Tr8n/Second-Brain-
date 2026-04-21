import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/my-ts-app";

export const connectToDatabase = async () => {  
    try {
        await mongoose.connect(MONGO_URI, {
        
        });
        console.log("Connected to MongoDB");    
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
module.exports = { connectToDatabase };