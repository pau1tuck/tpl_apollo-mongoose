import { IResolvers } from "@graphql-tools/utils";
import User from "@/modules/users/models/user.schema";

const readSelf: IResolvers = {
	Query: {
		user(parent, args, contextValue, info) {
			return; // Mongoose command
		},
	},
};
