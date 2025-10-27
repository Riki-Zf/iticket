import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB(process.env.MONGO_URI);

// routes
app.use("/api/tickets", ticketRoutes);

// health check
app.get("/", (req, res) => res.send("Ticketing API is running"));

// error handling
app.use(notFound);
app.use(errorHandler);

// ❌ JANGAN gunakan app.listen() di Vercel
// Vercel akan menjalankan fungsi serverless otomatis
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app; // ✅ penting agar dikenali oleh Vercel
