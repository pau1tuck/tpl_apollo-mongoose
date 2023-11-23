// Check .env for required environment variables.
const requiredEnvVars = ["DB_URI", "SESSION_SECRET"];

for (const envVar of requiredEnvVars) {
	if (!process.env[envVar]) {
		throw new Error(
			`Environment variable ${envVar} is required. Please modify your .env file configuration.`,
		);
	}
}

// Import environment variables and set defaults.
const envConfig: NodeJS.ProcessEnv = {
	NODE_ENV: process.env.NODE_ENV || "development",
	HOST: process.env.HOST || "localhost",
	PORT: process.env.PORT || "3000",
	THREADS: process.env.THREADS || "1", // Web concurrency
	// MongoDB database
	DB_URI: process.env.DB_URI,
	DB_NAME: process.env.DB_NAME || "",
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

// Make environment variables globally available.
const env = {
	...envConfig,
	PORT: toInt(envConfig.PORT, 3000),
	THREADS: toInt(envConfig.THREADS, 1),
};

export default env;
