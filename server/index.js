const express = require("express");
const ExpanseRouter = require("./Routes/ExpanseRoute");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/db");
const bodyParser = require("body-parser");
const AuthRouter = require("./Routes/auth");
dotenv.config({ path: "./config/config.env" });
const morgan = require("morgan")

connectDB();
const PORT =8000
const app = express();
app.use(
  cors({
    origin:"http://localhost:3000", 
    methods: ["GET", "POST","PUT"],
    credentials: true,
  })
);
app.use(bodyParser.json({limit:"30mb"}));
app.use(cors());
app.use(morgan("dev"))
app.use("/auth", AuthRouter);
app.use("/epxense", ExpanseRouter);
app.get("/",(req,res)=>{
  res.json({msg:"SERVER IS READY TO USE"})
})
app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
});

// src/app/Projects/Expensetracker/server
// npm command path
