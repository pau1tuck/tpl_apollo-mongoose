// @/config/env.config.ts
import { cleanEnv, str, num, url, email } from "envalid";
import * as dotenv from "dotenv";
dotenv.config();

interface ProcessEnv {
	// Node.js server settings
	NODE_ENV: "development" | "test" | "staging" | "production";
	HOST: string;
	PORT: number;
	THREADS: number;

	// Database
	DB_URI: string;
	DB_NAME: string;
}

const env: ProcessEnv = cleanEnv(process.env, {
	// Node.js server
	NODE_ENV: str({
		choices: ["development", "test", "production", "staging"],
	}),
	HOST: str({ default: "127.0.0.1" }),
	PORT: num({ default: 3000 }),
	THREADS: num({ default: 1 }),
	// Database
	DB_URI: str(),
	DB_NAME: str({ default: "" }),
	// ... other variables as needed
	// For email validation
	// ADMIN_EMAIL: email({ default: "admin@example.com" }),
	// For URL validation
	// SOME_API_URL: url(),
});

export default env;
