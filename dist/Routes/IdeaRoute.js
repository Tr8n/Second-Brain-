"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IdeaController_1 = require("../Middleware/IdeaController");
const router = express_1.default.Router();
router.post("/", IdeaController_1.createIdea);
router.get("/", IdeaController_1.getAllIdeas);
router.patch("/:id/tag", IdeaController_1.addTagToIdea);
router.patch("/:id/importance", IdeaController_1.updateIdeaImportance);
exports.default = router;
