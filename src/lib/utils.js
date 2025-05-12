import mongoose from "mongoose";

//connexion using mongoose

export async function connectToDB() {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connection established.");
  } catch (error) {
    console.error("❌ Failed to connect:", error);
    throw new Error("Database connection failed", error);
  }
}
