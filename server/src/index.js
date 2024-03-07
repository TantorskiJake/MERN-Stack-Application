import express from "express";
import cors from "cors"
import mongoose from "mongoose"

import {userRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter); 

mongoose.connect(
    "mongodb+srv://jaketech:MERNpassword123@recipes.pfdwpew.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
);


app.listen(3001, () => console.log("Server Started"));