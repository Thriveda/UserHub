import UserModel from "../models/usermodel.js" 
import dotenv from 'dotenv'
dotenv.config()

export async function getAllUsers(req, res){
    try{
        const users = await UserModel.find();
        if (users){
            return res.status(200).json({ message: "fetched the data of all users", users:users});
        }
        return res.status(404).json({ message: "No data of the user is available"});
        
    }
    catch(error){
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}


export async function getUserById(req, res){
    const {id} = req.params
    try{
        const user = await UserModel.findById(id);
        if(!user){
            return  res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(500).json({ message: "Server Error", error: error.message });                                                                            
    }
}



export async function createUser(req, res){
    const { name, email, phoneNo, companyName, address } = req.body;
    

    try{
        const user = await UserModel.findOne({ $or: [ { email }, { phoneNo } ] });
        if (user){
            return res.status(400).json({ message: "User with given email or phone number already exists." });
        }        
        
        const newUser = new UserModel({ name, email, phoneNo, companyName, address });
        await newUser.save();
        return res.status(201).json({ message: "User created successfully", user: newUser });
    }
    catch(error){
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export async function updateUser(req, res){
    const { id } = req.params;
    const { name, email, phoneNo, companyName, address } = req.body;
    try{
        const user = await UserModel.findById(id);
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }   
        user.name = name || user.name;
        user.email = email || user.email;
        user.phoneNo = phoneNo || user.phoneNo;
        user.companyName = companyName || user.companyName;
        user.address.street = address.street || user.address.street;
        user.address.city = address.city || user.address.city;
        user.address.zipcode = address.zipcode || user.address.zipcode;
        user.address.latitude = address.latitude || user.address.latitude;
        user.address.longitude = address.longitude || user.address.longitude;
        await user.save();
        return res.status(200).json({ message: "User updated successfully", user });
    }
    catch(error){
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export async function deleteUser(req, res){
    const { id } = req.params;  
    try{
        const user = await UserModel.findByIdAndDelete(id); 
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        const users = await UserModel.find()
        return res.status(200).json({ message: "User deleted successfully", user, users });
    }
    catch(error){
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}