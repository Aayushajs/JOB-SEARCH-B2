import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import bannerRoute from "./routes/bannerRoutes.js"; 
import courseRoutes from './routes/courseRoutes.js';
import { config } from "dotenv";
config({ path: "./config/config.env" });

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser());
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true); // Sabhi origins allow honge
    },
    credentials: true, // Cookies aur authentication allow karne ke liye
    methods: "GET,POST,PUT,DELETE",
    
};

app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use('/api/v1/courses', courseRoutes);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/banner",bannerRoute)

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port http://localhost:${PORT}`);
})
