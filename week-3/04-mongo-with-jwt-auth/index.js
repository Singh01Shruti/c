const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(3000);

mongoose.connect('mongodb+srv://singh001shruti:eoYn0wHIr4puEx0z@cluster0.k9nfaff.mongodb.net/data');
