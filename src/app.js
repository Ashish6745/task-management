import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRouter from "./routes/health.routes.js";
dotenv.config({ path: "./.env" });
const app = express();
//app.use -> It means middlewares
app.use(cors({
    origin: process.env.CORS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));



app.use("/api/v1/health", healthRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});


export default app;