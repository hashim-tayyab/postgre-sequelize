const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./routes/employeeRoutes");
app.use('/', userRouter);


app.listen(3000);