"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./Db/connection");
const dotenv_1 = __importDefault(require("dotenv"));
const UserRoute_1 = __importDefault(require("./Routes/UserRoute"));
const IdeaRoute_1 = __importDefault(require("./Routes/IdeaRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
(0, connection_1.connectToDatabase)();
app.get("/", (req, res) => {
    res.send("Backend running");
});
app.use("/api/user/auth", UserRoute_1.default);
app.use("/api/ideas", IdeaRoute_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
