import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());





// Global error handler (should be after routes)
app.use(errorHandler);

export default app;