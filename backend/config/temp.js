import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config({ path: "../.env" });

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected to DB");

    // Drop the username index
    const result = await mongoose.connection.db.collection("users").dropIndex("username_1");
    console.log("Index dropped:", result);

    await mongoose.disconnect();
    console.log("Disconnected");
  } catch (error) {
    console.error("Error dropping index:", error.message);
  }
};

run();
