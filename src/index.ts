// @/index.ts
import express, { Application } from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import { connectMongoDB, disconnectMongoDB } from "./config/database.config";
import env from "./config/env.config";
import { typeDefs, resolvers } from "./config/apollo.config";

interface ApolloContext {
	token?: string;
}

const server = async () => {
	// Connect to MongoDB.
	await connectMongoDB();

	// Initialize Express.
	const app: Application = express();

	const httpServer = http.createServer(app);

	// Initialize ApolloServer with graceful shutdown plugin.
	const server = new ApolloServer<ApolloContext>({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();

	// Handle CORS and JSON body parser middleware.
	app.use(
		"/graphql",
		cors<cors.CorsRequest>(),
		express.json(),
		expressMiddleware(server, {
			context: async ({ req }) => ({ token: req.headers.token }),
		}),
	);

	await new Promise<void>((resolve) =>
		httpServer.listen({ port: env.PORT }, resolve),
	);
	console.log(`🚀 Server running on ${env.HOST}:${env.PORT}`);

	// Graceful Mongoose shutdown.
	process.on("SIGINT", async () => {
		disconnectMongoDB();
	});
};

server().catch((err) => {
	console.error("Server failed to start:", err);
});
