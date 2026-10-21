import mongoose from "mongoose";

// Teacher Schema
const teacherSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        subject: { type: String, required: true },
        address: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Teacher = mongoose.model("teachers", teacherSchema);

export default Teacher;
