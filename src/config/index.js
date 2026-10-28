import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const envConfig = {
    DB_URI: process.env.DB_URI,
    PORT: process.env.PORT,
};

export default envConfig;
