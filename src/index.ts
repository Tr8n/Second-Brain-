import express from "express";
import  { connectToDatabase } from "./Db/connection";
import dotenv from "dotenv";
import userRoutes from "./Routes/UserRoute";
import ideaRoutes from "./Routes/IdeaRoute";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
connectToDatabase();  
app.get("/", (req, res) => {
  res.send("Backend running");
});
app.use("/api/user/auth", userRoutes);
app.use("/api/ideas", ideaRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});