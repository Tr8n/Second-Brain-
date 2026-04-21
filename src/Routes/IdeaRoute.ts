import express from "express";
import {
  addTagToIdea,
  createIdea,
  getAllIdeas,
  updateIdeaImportance,
} from "../Middleware/IdeaController";

const router = express.Router();

router.post("/", createIdea);
router.get("/", getAllIdeas);
router.patch("/:id/tag", addTagToIdea);
router.patch("/:id/importance", updateIdeaImportance);

export default router;
