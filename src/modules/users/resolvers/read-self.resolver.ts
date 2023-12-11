import { IResolvers } from "@graphql-tools/utils";
import User from "@/modules/users/models/user.schema";

const readSelf: IResolvers = {
	Query: {
		user: async (parent, args, contextValue, info) => {
			const { id } = args;
            return await User.findById(id);
		},
	},
};
