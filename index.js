const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./models')
const userRouter = require("./routes/userRoutes");
const profileRouter = require("./routes/profileRoute");
const articleRouter = require("./routes/articleRoute");
const courseRouter = require('./routes/courseRoute');
app.use('/', userRouter);
app.use(profileRouter);
app.use(articleRouter);
app.use(courseRouter);
app.set('view engine', 'ejs');

app.listen(3000, () => console.log("Listening to PORT: 3000"));