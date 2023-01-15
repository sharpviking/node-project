const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

mongoose.connect("mongodb+srv://harshityadav:JxsV3y4V7mWl8g1I@cluster0.s9trpdc.mongodb.net/ProductsDB")
.then(()=>{console.log("Server Connected")})
.catch((err)=>{console.log("error found" + err)});

const SignupRouter = require("./routes/routes")
const productRouter =require("./routes/proutes")
app.use("/auth",SignupRouter);
app.use("/products",productRouter);

app.listen("5000", () => {
    console.log("server is runing");
})