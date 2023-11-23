import express, { Application, Request, Response } from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import { disconnectMongoDB } from "./config/database.config";

interface MyContext {
	token?: string;
}

const server = async () => {
	// Initialize Express.
	const app: Application = express();

	const httpServer = http.createServer(app);

	// Initialize ApolloServer with draining plugin.
	const server = new ApolloServer<MyContext>({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();

	// Handle CORS and JSON body parser
	app.use(
		"/",
		cors<cors.CorsRequest>(),
		express.json(),
		expressMiddleware(server, {
			context: async ({ req }) => ({ token: req.headers.token }),
		}),
	);

	await new Promise<void>((resolve) =>
		httpServer.listen({ port: env.NODE_PORT }, resolve),
	);
	console.log(`🚀 Server running on 127.0.0.1:${env.NODE_PORT}`);

	// Gracefully shutdown Mongoose connection.
	process.on("SIGINT", async () => {
		disconnectMongoDB();
	});
};

server().catch((err) => {
	console.error("Server failed to start:", err);
});
