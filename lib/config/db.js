import mongoose from "mongoose";

const connectDB = async () => {
    // 1:34:00 time stamp in the video for reference
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with an error code
    }
};

export default connectDB;