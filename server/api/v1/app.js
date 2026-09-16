import express from "express";
import cors from "cors";


const app = express();


app.use(cors())
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({
        status: "Under Development",
        developer: "Tahir Mehmood"    
    });
})

//Routes

export default app;
