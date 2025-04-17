import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js"
import productRoutes from './routes/page.route.js'
const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use("/api/solar", productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "frontend","dist")));

    app.get(/(.*)/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}


app.listen(8000, ()=>{
    connectDB();
    console.log('Server is running in http://localhost:'+ PORT);
})

