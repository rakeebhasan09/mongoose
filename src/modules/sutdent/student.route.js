import { Router } from "express";
import { StudentController } from "./student.controller.js";

const router = Router();

router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getStudentById);
router.post("/", StudentController.createStudent);
router.patch("/:id", StudentController.updateStudentById);
router.delete("/:id", StudentController.deleteStudentById);

export const StudentRouter = router;
