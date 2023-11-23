// Check .env for required environment variables.
const requiredEnvVars = ["DB_URI", "SESSION_SECRET"];

for (const varName of requiredEnvVars) {
	if (!process.env[varName]) {
		throw new Error(
			`Environment variable ${varName} is required. Please modify your .env configuration.`,
		);
	}
}

// Extract environment variables from Node process and set defaults.
const envConfig: NodeJS.ProcessEnv = {
	NODE_ENV: process.env.NODE_ENV || "development",
	HOST: process.env.HOST || "localhost",
	PORT: process.env.PORT || "3000",
	THREADS: process.env.THREADS || "1", // Web concurrency
	// MongoDB database
	DB_URI: process.env.DB_URI,
	DB_NAME: process.env.DB_NAME,
};

// Parse string and undefined environment variables to integers.
const toInt = (value: string | undefined, defaultValue: number): number => {
	if (value === undefined) {
		return defaultValue;
	}
	const parsed = parseInt(value, 10);
	if (Number.isNaN(parsed)) {
		return defaultValue;
	}
	return parsed;
};

// Export environment variables to application.
const env = {
	...envConfig,
	PORT: toInt(envConfig.PORT, 3000),
	WORKER_THREADS: toInt(envConfig.WORKER_THREADS, 1),
};

export default env;
