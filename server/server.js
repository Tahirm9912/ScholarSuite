import app from "./api/v1/app.js";
import dotenv from "dotenv";

dotenv.config()

const port = process.env.SERVER_PORT;
app.listen(port, ()=>{
    console.log(`ScholarSuit Running on Port ${port}`)
})
