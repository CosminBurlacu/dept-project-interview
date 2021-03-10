import express from "express";
const app: any = express();
require("./database/database");
const cors = require("cors");
require("dotenv").config();
const formData = require('express-form-data');	

import PostRouter from "./routers/post.router";

app.use(cors());
app.use(express.json());
app.use(formData.parse());

app.use(PostRouter);

export default app;
 