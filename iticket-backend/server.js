import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// connect DB
connectDB(process.env.MONGO_URI);

// routes
app.use("/api/tickets", ticketRoutes);

// health check
app.get("/", (req, res) => res.send("Ticketing API is running"));

// error middleware (must be after routes)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app;
