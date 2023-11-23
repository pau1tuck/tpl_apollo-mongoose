// @/config/database.config.ts
import mongoose from "mongoose";
import env from "@/config/env.config";

const connectToMongoDB = async () => {
	try {
		const dbUri = env.DB_URI;
		const options = {
			autoIndex: false, // Set to true in development
			authSource: "admin",
			bufferCommands: false,
			dbName: env.DB_NAME,
			family: 4, // Use IPv4, skip trying IPv6
			heartbeatFrequencyMS: 10000,
			maxPoolSize: 100,
			minPoolSize: 10,
			serverSelectionTimeoutMS: 30000,
			socketTimeoutMS: 45000,
		};

		// Enable Mongoose debug mode for verbose output
		mongoose.set("debug", env.NODE_ENV !== "production");

		await mongoose.connect(dbUri, options);
		console.log("Succesfully connected to MongoDB.");

		// Event listeners
		mongoose.connection.on("disconnected", () => {
			console.log("MongoDB disconnected.");
		});
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

export const disconnectMongoDB = async () => {
	try {
		await mongoose.connection.close();
		console.log("MongoDB connection closed.");
		process.exit(0);
	} catch (error) {
		console.error("Error closing MongoDB connection:", error);
		process.exit(1);
	}
};

export default connectToMongoDB;
