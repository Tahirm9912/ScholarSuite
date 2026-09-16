import express from "express";
import { getAllStudents, getStudentbyId } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentbyId)


export default router;