import { Router } from "express";
import { StudentController } from "./student.controller.js";

const router = Router();

router.get("/", StudentController.getAllStudents);
router.post("/", StudentController.createStudent);

export const StudentRouter = router;
