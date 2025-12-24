import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

async function serverStart(){
    try{
        await connectDB(MONGODB_URI)
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
    }
    catch(error){
        console.log("Server failed to start", error)
    }
    
}
serverStart();

app.use('/users', userRoute);
