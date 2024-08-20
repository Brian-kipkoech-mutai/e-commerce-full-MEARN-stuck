import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true /*unique: true*/ },
  password: { type: String },
  picture: { type: String },
  googleId: { type: String },
  createdAt: { type: Date, default: Date.now },
  provider: { type: String, enum: ["local", "google"], required: true },
  emailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String },
  emailVerificationExpiration: { type: Date },
});

userSchema.methods.setPassword = async function (password) {
  try {
    const hashed = await bcrypt.hash(password, 10);
    this.password = hashed;
  } catch (error) {
    throw error;
  }
};

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
