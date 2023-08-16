const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRouter = require("./routes/employeeRoutes");
app.use('/', userRouter);
app.set('view engine', 'ejs');

app.listen(3000, () => console.log("Listening to PORT: 3000"));