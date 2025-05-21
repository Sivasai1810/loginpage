require('dotenv').config()
const express=require("express")
const app=express();
app.use(express.json())
const connectdb=require("./db.js")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
connectdb();
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const port = 3000
app.listen(port, console.log(`Listening on port ${port}...`));