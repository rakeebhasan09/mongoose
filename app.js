import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Student Schema
const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
        fatherName: { type: String, required: true },
        motherName: { type: String, required: true },
        fatherPhone: { type: String, required: true },
        motherPhone: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Student = mongoose.model("students", studentSchema);

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

// Create New Student
app.post("/api/v1/students", async (req, res) => {
    try {
        console.log("Request body:", req.body); // Log the request body for debugging
        const newStudent = await Student.create(req.body);
        // console.log("New student created:", newStudent);

        // Check if the student was created successfully
        if (!newStudent) {
            return res.status(400).json({
                success: false,
                message: "Error creating student",
            });
        }

        // Respond with the created student data
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            student: newStudent,
        });
    } catch (error) {
        // Handle any errors that occur during the creation process
        res.status(500).json({
            success: false,
            message: "Error creating student",
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

// Server entry point
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Express and mongoose server!",
    });
});

const main = async () => {
    try {
        // Database connection
        await mongoose.connect("mongodb://127.0.0.1:27017/mongooseexpress");
        console.log("Connected to MongoDB");

        // Start the server
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

main();
