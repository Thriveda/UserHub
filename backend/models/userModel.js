import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phoneNo: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10}$/,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      street: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      zipcode: {
        type: String,
        required: true,
        match: /^[0-9]{6}$/,
      },
      longitude: {
        type: String,
        required: true,
        match: /^\d+(\.\d+)?$/,
      },
      latitude: {
        type: String,
        required: true,
        match: /^\d+(\.\d+)?$/,
      },
    },
  },
  { timestamps: true }
);


const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
