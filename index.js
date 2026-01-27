import express from "express";
import "dotenv/config";
import connectWithDb from "./config/database.js";
import blog from "./Routes/blog.js"


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
//mount
app.use("/api/v1", blog);


app.get("/", (req, res) => {
    res.send("Home");
})

app.listen(PORT, () => {
    console.log(`App is running successfully on ${PORT}`);
})
connectWithDb();