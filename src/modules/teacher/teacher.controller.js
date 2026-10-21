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

export const TeacherController = {
    createTeacher,
};
