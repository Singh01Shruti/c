const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");


app.use(bodyParser.json());
app.use(cors());
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.listen(3000);
mongoose.connect("mongodb+srv://singh001shruti:eoYn0wHIr4puEx0z@cluster0.k9nfaff.mongodb.net/cards");


//what more can be done
/*
zod, err middleware in the emd, dk what to add in update functionality 
*/

