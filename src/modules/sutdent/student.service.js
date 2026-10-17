import Student from "./student.model.js";

const createStudentInToDB = async (payload) => {
    const newStudent = await Student.create(payload);
    return newStudent;
};

const getAllStudentsFromDB = async () => {
    const students = await Student.find().sort({ createdAt: -1 });
    const totalStudents = await Student.countDocuments();
    return { students, totalStudents };
};

export const StudentService = {
    createStudentInToDB,
    getAllStudentsFromDB,
};
