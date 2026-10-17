import { StudentService } from "./student.service.js";

const createStudent = async (req, res) => {
    try {
        // Log the request body for debugging
        const newStudent = await StudentService.createStudentInToDB(req.body);

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
};

const getAllStudents = async (req, res) => {
    try {
        const { students, totalStudents } =
            await StudentService.getAllStudentsFromDB();
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
};

export const StudentController = {
    createStudent,
    getAllStudents,
};
