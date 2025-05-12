/* nodemon helps server to automatically start server.js*/
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// After writing fot env we have to call config file
dotenv.config();




//Access to fetch at 'http://localhost:5000/' from origin 'http://localhost:3000' has been blocked by CORS policy:
// cors-origin-policy
// for preventing this we do below
const cors = require("cors");
app.use(cors());   



// const User = require("./models/userModel");

const userRoute = require("./routes/userRoute");

// for solving error from postmon
app.use(express.json()); // or use body parser


mongoose
.connect(process.env.URL) // we can not store it in this file 
// so we securely write this in some file
.then(() => {
    console.log("connected successfully");

    app.listen(process.env.PORT || 8000, (err) => {
        if(err) console.log(err);

        console.log("running successfully at", process.env.PORT);
    });
})
.catch((error) => {
    console.log("error", error);
});

// without making schema or model for database , it is not going to creat in MongoDB
// So we have to creat the schema




// we move all api to another folder i.e router
// and then export them and import in this server.js file
// and the use in app.use(userRoute)

app.use(userRoute);
