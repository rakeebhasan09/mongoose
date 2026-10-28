import mongoose from "mongoose";
import app from "./app.js";
import envConfig from "./config/index.js";

const main = async () => {
    try {
        // Database connection
        await mongoose.connect(envConfig.DB_URI);
        console.log("Connected to MongoDB");

        // Start the server
        app.listen(envConfig.PORT, () => {
            console.log(`Example app listening on port ${envConfig.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

main();
