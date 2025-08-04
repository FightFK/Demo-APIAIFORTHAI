import { Router } from "express";
import { summarize } from "../controllers/summarize.js";

const router = Router();

router.post("/",summarize);

export default router;