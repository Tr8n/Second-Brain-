"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserAuth_1 = require("../Middleware/UserAuth");
const router = express_1.default.Router();
// User registration route
router.post('/register', UserAuth_1.createUser);
// User login route
router.post('/login', UserAuth_1.loginUser);
exports.default = router;
