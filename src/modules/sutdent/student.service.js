import Student from "./student.model.js";

// Create a new student in the database
const createStudentInToDB = async (payload) => {
    const newStudent = await Student.create(payload);
    return newStudent;
};

// Get all students from the database
const getAllStudentsFromDB = async () => {
    const students = await Student.find().sort({ createdAt: -1 });
    const totalStudents = await Student.countDocuments();
    return { students, totalStudents };
};

// Get a student by ID from the database
const getStudentByIdFromDB = async (id) => {
    const student = await Student.findById(id);
    return student;
};

// Update a student by ID in the database
const updateStudentByIdFromDB = async (id, payload) => {
    const updatedStudent = await Student.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return updatedStudent;
};

// Delete a student by ID from the database
const deleteStudentByIdFromDB = async (id) => {
    const deletedStudent = await Student.findByIdAndDelete(id);
    return deletedStudent;
};

export const StudentService = {
    createStudentInToDB,
    getAllStudentsFromDB,
    getStudentByIdFromDB,
    updateStudentByIdFromDB,
    deleteStudentByIdFromDB,
};
