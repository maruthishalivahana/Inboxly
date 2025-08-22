import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
// Uncomment the next line if you have admin routes
// import adminRoutes from "./routes/adminRoutes.js";

dotenv.config(); // loads .env automatically

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes); // uncomment if admin routes exist

// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
