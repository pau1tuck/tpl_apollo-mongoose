import mongoose from "mongoose";

const connectToDatabase = async () => {
	try {
		const dbUri = "your_mongodb_uri_here"; // Replace with your MongoDB URI
		const options = {
			autoIndex: false, // Set to true in development
			authSource: "admin",
			bufferCommands: false,
			dbName: "your_db_name",
			family: 4, // Use IPv4, skip trying IPv6
			heartbeatFrequencyMS: 10000,
			maxPoolSize: 100,
			minPoolSize: 10,
			serverSelectionTimeoutMS: 30000,
			socketTimeoutMS: 45000,
		};

		await mongoose.connect(dbUri, options);
		console.log("Succesfully connected to MongoDB.");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

export default connectToDatabase;
