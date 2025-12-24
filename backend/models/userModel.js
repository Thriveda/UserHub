import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    phoneNo:{
        type:Number,
        required:true,
        unique:true,
        minLength:10,
        maxLength:10,
        match: /^[0-9]+$/
    },
    companyName:{
        type:String,
        required:true
    },
    address:
        {
            street:{
                type:String,
                required:true
            },
            city:{
                type:String,
                required:true
            },
            zipcode:{
                type:String,
                required:true,
                minLength:6,
                maxLength:6,
                match: /^[0-9]+$/
            },
        
            longitude:{
                type:String,
                required:true,
                match: /^\d+(\.\d+)?$/
            },
            latitude:{
                type:String,
                required:true,
                match: /^\d+(\.\d+)?$/
            }
            
        }
    
})

export const UserModel = model("users", userSchema);