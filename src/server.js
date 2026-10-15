import mongoose from "mongoose";
import app from "./app.js";

const main = async () => {
    try {
        // Database connection
        await mongoose.connect("mongodb://127.0.0.1:27017/mongooseexpress");
        console.log("Connected to MongoDB");

        // Start the server
        app.listen(3000, () => {
            console.log(`Example app listening on port ${3000}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

main();
