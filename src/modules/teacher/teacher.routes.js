import { Router } from "express";
import { TeacherController } from "./teacher.controller.js";

const router = Router();

// Get All Teachers
router.get("/", TeacherController.getAllTeachers);

// Get Teacher By ID
router.get("/:id", TeacherController.getTeacherById);

// Create New Teacher
router.post("/", TeacherController.createTeacher);

export const TeacherRouter = router;
