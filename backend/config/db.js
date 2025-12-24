import mongoose from 'mongoose';



const connectDB = async (MONGODB_URI) => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("MONGODB connected successfully")
    }
    catch(error){
        console.log("MONGODB connection failed", error)
    }
}
export default connectDB;