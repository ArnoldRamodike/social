import express from "express";
import { getComments, addCommnet } from "../controllers/comment.js";

const router = express.Router();

router.get("/", getComments);
router.post("/", addCommnet);

export default router