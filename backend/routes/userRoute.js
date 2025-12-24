import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../conrollers/userController.js";

const userRoute = Router();

userRoute.get("/all", getAllUsers)
userRoute.get("/:id", getUserById)
userRoute.post("/createUser", createUser)
userRoute.put("/update/:id", updateUser)
userRoute.delete("/delete/:id", deleteUser)

export default userRoute;