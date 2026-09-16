import express from "express";
import cors from "cors";
import studentRouting from "./routes/studentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRouting);

app.get("/", (req, res) => {
    res.json({
        status: "Under Development",
        developer: "Tahir Mehmood"
    });
});

export default app;