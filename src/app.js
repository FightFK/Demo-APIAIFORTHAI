import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";
import summarizeRoute from "./routes/summarizeroute.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
 app.use("/api/summarize", summarizeRoute)  



// Global error handler (should be after routes)
app.use(errorHandler);

export default app;