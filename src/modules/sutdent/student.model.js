import mongoose from "mongoose";

// Student Schema
const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
        fatherName: { type: String, required: true },
        motherName: { type: String, required: true },
        fatherPhone: { type: String, required: true },
        motherPhone: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },
        class: { type: String, required: true },
        admissionRoll: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Student = mongoose.model("students", studentSchema);

export default Student;
