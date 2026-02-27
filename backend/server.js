import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://rayar1fw.vercel.app',
        'https://raya-r1fw-git-main-finxtapps-projects.vercel.app',
        'https://raya-r1fw-finxtapps-projects.vercel.app'
    ],
    credentials: true
}))

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res)=>{
    res.send("API is Working !")
})

app.listen(port, '0.0.0.0', ()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

