const express=require("express");
const app=express();
const PORT=8000
const mongoose=require("mongoose")
require("dotenv").config()
const URI=process.env.URI
const userRoute=require("./routes/userRoute")
const cors=require("cors")
const path=require("path")

app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.use(cors())


app.use(userRoute)

// MongoDB Connection
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on PORT ${PORT}`);
        });
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });







