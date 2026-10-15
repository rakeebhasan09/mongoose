import express from "express";
import mongoose from "mongoose";
import Student from "./modules/sutdent/student.model.js";
import { StudentRouter } from "./modules/sutdent/student.route.js";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Teacher Schema
const teacherSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        subject: { type: String, required: true },
        address: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Teacher = mongoose.model("teachers", teacherSchema);

app.use("/api/v1/students", StudentRouter);

// Get All Students
app.get("/api/v1/students", async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        const totalStudents = await Student.countDocuments();
        // Get all students
        res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            totalStudents,
            students,
        });
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        res.status(500).json({
            success: false,
            message: "Error retrieving students",
            error: error.message,
        });
    }
});

// Get Student by ID
app.get("/api/v1/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student retrieved successfully",
            student,
        });
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        res.status(500).json({
            success: false,
            message: "Error retrieving student",
            error: error.message,
        });
    }
});

// Delete Student by ID
app.delete("/api/v1/students/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            student: deletedStudent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting student",
            error: error.message,
        });
    }
});

// Create New Teacher
app.post("/api/v1/teachers", async (req, res) => {
    try {
        const newTeacher = await Teacher.create(req.body);
        // Check if the teacher was created successfully
        if (!newTeacher) {
            return res.status(400).json({
                success: false,
                message: "Error creating teacher",
            });
        }

        res.status(201).json({
            success: true,
            message: "Teacher created successfully",
            teacher: newTeacher,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating teacher",
            error: error.message,
        });
    }
});

// Server entry point
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Express and mongoose server!",
    });
});

export default app;
