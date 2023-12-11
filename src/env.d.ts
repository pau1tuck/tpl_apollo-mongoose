declare namespace NodeJS {
    export interface ProcessEnv {
	// Node.js server settings
	NODE_ENV: "development" | "test" | "staging" | "production";
    DEBUG: string;
	HOST: string;
	PORT: string;
	THREADS: string;

	// Database
	DB_URI: string;
	DB_NAME: string;
    }
}