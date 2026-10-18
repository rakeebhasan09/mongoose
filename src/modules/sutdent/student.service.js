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

const getStudentByIdFromDB = async (id) => {
    const student = await Student.findById(id);
    return student;
};

export const StudentService = {
    createStudentInToDB,
    getAllStudentsFromDB,
    getStudentByIdFromDB,
};
