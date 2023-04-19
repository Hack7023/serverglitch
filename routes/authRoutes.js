import express, { application } from "express";
import { collectData } from "../controller/userController.js";
import { enterdata } from "../controller/userController.js";
const router = express.Router();

router.get("/sampledata", collectData);
router.post("/enterdata", enterdata);

export default router;
