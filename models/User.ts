import {Schema} from "mongoose";
import mongoose  from "mongoose";
const User =new Schema(
  {
    name: String,
    age:Number
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);