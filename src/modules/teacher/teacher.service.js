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

export const TeacherService = {
    createTeacherInToDB,
    getAllTeachersFromDB,
};
