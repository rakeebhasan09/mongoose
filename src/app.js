import express from "express";
import mongoose from "mongoose";
import Student from "./modules/sutdent/student.model.js";
import { StudentRouter } from "./modules/sutdent/student.route.js";
import { TeacherRouter } from "./modules/teacher/teacher.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// All student routes
app.use("/api/v1/students", StudentRouter);

// All teacher routes
app.use("/api/v1/teachers", TeacherRouter);

// Server entry point
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Express and mongoose server!",
    });
});

export default app;
