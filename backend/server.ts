import dotenv from "dotenv";
dotenv.config();
import "./core/db";
import express from "express";
import { NewsCtrl } from "./controllers/NewsController";
import { createNewsValidations } from "./validations/create-news";

const app = express();
const cors = require("cors");

app.use(express.static("/build"));

app.use(cors()); // Use this after the variable declaration
app.use(express.json());

app.get("/news", NewsCtrl.index);
app.post("/news", createNewsValidations, NewsCtrl.create);
app.get("/news/:id", NewsCtrl.show);

app.listen(process.env.PORT, (): void => {
    console.log("runnig");
});
