import Teacher from "./teacher.model.js";

const createTeacherInToDB = async (payload) => {
    const newTeacher = await Teacher.create(payload);
    return newTeacher;
};

export const TeacherService = {
    createTeacherInToDB,
};
