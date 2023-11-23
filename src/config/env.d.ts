declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		PORT: string; // PORT is typically a string, even though it represents a number
		DB_URI: string;
		DB_NAME: string;
		THREADS: string;
	}
}
