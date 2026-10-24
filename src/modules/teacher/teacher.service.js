import Teacher from "./teacher.model.js";

const createTeacherInToDB = async (payload) => {
    const newTeacher = await Teacher.create(payload);
    return newTeacher;
};

const getAllTeachersFromDB = async () => {
    const teachers = await Teacher.find().sort({ createdAt: -1 });
    const totalTeachers = await Teacher.countDocuments();
    return { teachers, totalTeachers };
};

const getTeacherByIdFromDB = async (id) => {
    const teacher = await Teacher.findById(id);
    return teacher;
};

const deleteTeacherByIdFromDB = async (id) => {
    const deletedTeacher = await Teacher.findByIdAndDelete(id);
    return deletedTeacher;
};

export const TeacherService = {
    createTeacherInToDB,
    getAllTeachersFromDB,
    getTeacherByIdFromDB,
    deleteTeacherByIdFromDB,
};
