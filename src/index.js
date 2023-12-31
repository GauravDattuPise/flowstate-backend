const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

// const dotenv = require("dotenv");
const HttpError = require("./models/httpError");
// dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}));

// connecting to mongodb
mongoose.connect("mongodb+srv://gauravpise87:Gaurav2001@gauravdb.crgpvot.mongodb.net/mgflowstate") 
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log("error in connection", err));

// user routes
app.use("/flowstate", require("./routes/flowStateRoute"))


// route not found
app.use((err,req,res)=>{
    const error = new HttpError("could not found path", 404);
    throw error;
})

// global middleware to handle errors
app.use((error, req, res, next) => {
       
    if(res.headerSent){
        return next(error)
    } 
    
    res.status(error.code || 500)
    res.json({ message : error.message || "An unknown error occured"})
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Server is running on", port);
})


