import { Router } from "express";
import { TeacherController } from "./teacher.controller.js";

const router = Router();

// Get All Teachers
router.get("/", TeacherController.getAllTeachers);

// Get Teacher By ID
router.get("/:id", TeacherController.getTeacherById);

// Create New Teacher
router.post("/", TeacherController.createTeacher);

// Delete Teacher By ID
router.delete("/:id", TeacherController.deleteTeacherById);

export const TeacherRouter = router;
