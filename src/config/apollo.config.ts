import { gql } from "graphql-tag";

// Define a simple schema with a dummy query
export const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define an empty resolver
export const resolvers = {
	Query: {
		hello: () => "Hello world!",
	},
};
