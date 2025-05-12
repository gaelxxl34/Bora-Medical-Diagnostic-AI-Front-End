import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String, require: true },
    email: { type: String, require: true },
    profession: { type: String, require: true },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
