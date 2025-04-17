import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import productRoutes from './routes/page.route.js'
const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 7000;

app.use("/api/solar", productRoutes)

app.listen(7000, ()=>{
    connectDB();
    console.log('Server is running in http://localhost:'+ PORT);
})

