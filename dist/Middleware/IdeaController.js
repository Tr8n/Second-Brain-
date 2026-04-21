"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIdeaImportance = exports.addTagToIdea = exports.getAllIdeas = exports.createIdea = void 0;
const IdeaSchema_1 = __importDefault(require("../Db/IdeaSchema"));
const createIdea = async (req, res) => {
    try {
        const { taskName, content, tags, postLinks, importance, ideaDate } = req.body;
        if (!taskName || !content) {
            return res.status(400).json({
                message: "taskName and content are required",
            });
        }
        const idea = await IdeaSchema_1.default.create({
            taskName,
            content,
            tags: Array.isArray(tags) ? tags : [],
            postLinks: Array.isArray(postLinks) ? postLinks : [],
            importance: importance ?? 3,
            ideaDate: ideaDate ?? new Date(),
        });
        return res.status(201).json({
            message: "Idea saved successfully",
            idea,
        });
    }
    catch {
        return res.status(500).json({ message: "Could not save idea" });
    }
};
exports.createIdea = createIdea;
const getAllIdeas = async (_req, res) => {
    try {
        const ideas = await IdeaSchema_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json(ideas);
    }
    catch {
        return res.status(500).json({ message: "Could not fetch ideas" });
    }
};
exports.getAllIdeas = getAllIdeas;
const addTagToIdea = async (req, res) => {
    try {
        const { id } = req.params;
        const { tag } = req.body;
        if (!tag || typeof tag !== "string") {
            return res.status(400).json({ message: "A valid tag is required" });
        }
        const cleanTag = tag.trim();
        if (!cleanTag) {
            return res.status(400).json({ message: "Tag cannot be empty" });
        }
        const updatedIdea = await IdeaSchema_1.default.findByIdAndUpdate(id, { $addToSet: { tags: cleanTag } }, { new: true });
        if (!updatedIdea) {
            return res.status(404).json({ message: "Idea not found" });
        }
        return res.status(200).json({
            message: "Tag added",
            idea: updatedIdea,
        });
    }
    catch {
        return res.status(500).json({ message: "Could not add tag" });
    }
};
exports.addTagToIdea = addTagToIdea;
const updateIdeaImportance = async (req, res) => {
    try {
        const { id } = req.params;
        const { importance } = req.body;
        const importanceValue = Number(importance);
        if (!Number.isInteger(importanceValue) ||
            importanceValue < 1 ||
            importanceValue > 5) {
            return res
                .status(400)
                .json({ message: "importance must be an integer from 1 to 5" });
        }
        const updatedIdea = await IdeaSchema_1.default.findByIdAndUpdate(id, { importance: importanceValue }, { new: true });
        if (!updatedIdea) {
            return res.status(404).json({ message: "Idea not found" });
        }
        return res.status(200).json({
            message: "Importance updated",
            idea: updatedIdea,
        });
    }
    catch {
        return res.status(500).json({ message: "Could not update importance" });
    }
};
exports.updateIdeaImportance = updateIdeaImportance;
