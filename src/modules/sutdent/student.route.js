import { Router } from "express";
import { StudentController } from "./student.controller.js";

const router = Router();

// Create New Student
router.post("/", StudentController.createStudent);

export const StudentRouter = router;
