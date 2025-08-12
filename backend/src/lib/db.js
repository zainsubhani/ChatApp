import mongoose from "mongoose";

export const mongoDB = async () => {
  try {
    // Connect to MongoDB using the URL from .env (usually named MONGODB_URI or MONGODB_URL)
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process on failure
  }
};
