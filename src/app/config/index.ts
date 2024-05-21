import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = { port: process.env.PORT, db_url: process.env.DATABASE_URL };

export default config;
