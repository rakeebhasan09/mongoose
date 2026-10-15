import Student from "./student.model.js";

const createStudentInToDB = async (payload) => {
    const newStudent = await Student.create(payload);
    return newStudent;
};

export const StudentService = {
    createStudentInToDB,
};
