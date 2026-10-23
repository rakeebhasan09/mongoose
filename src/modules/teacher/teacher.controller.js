import { TeacherService } from "./teacher.service.js";

// Create a new teacher
const createTeacher = async (req, res) => {
    try {
        const newTeacher = await TeacherService.createTeacherInToDB(req.body);
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
};

// Get all teachers
const getAllTeachers = async (req, res) => {
    try {
        const { teachers, totalTeachers } =
            await TeacherService.getAllTeachersFromDB();

        res.status(200).json({
            success: true,
            message: "Teachers retrieved successfully",
            totalTeachers,
            teachers,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving teachers",
            error: error.message,
        });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await TeacherService.getTeacherByIdFromDB(id);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Teacher retrieved successfully",
            teacher,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving teacher",
            error: error.message,
        });
    }
};

export const TeacherController = {
    createTeacher,
    getAllTeachers,
    getTeacherById,
};
