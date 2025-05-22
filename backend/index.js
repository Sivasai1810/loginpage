require('dotenv').config()
const express=require("express")
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors())
const connectdb=require("./db.js")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
connectdb();
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const port =process.env.PORT
app.listen(port, console.log(`Listening on port ${port}...`));