import mongoose from "mongoose";
import dotenv from "dotenv"
import express from "express";
import cors from "cors"
import authRouter from "./routes/authentication.js"
import clusterRouter from "./routes/cluster.js"

dotenv.config();
mongoose.set("strictQuery", false);
const url = process.env.MONGODB_URL;

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const app = express();
app.use(express.json());
app.use(cors());

app.use("/clusters", clusterRouter)
app.use("/auth", authRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});