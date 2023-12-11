import { v4 as uuid4 } from "uuid";
import { IResolvers } from "@graphql-tools/utils";

const createUserResolver: IResolvers = {
    Mutation: {
        createUser: async (_, args) => {
            const { input } = args;

            // Create a new instance of the User entity
            const user = new User();

            // Generate a UUID for the user ID
            user.id = uuid4();

            // Set the required user properties from the input arguments
            user.givenName = input.givenName;
            user.familyName = input.familyName;
            user.city = input.city;
            user.country = input.country;
            user.email = input.email;
            user.password = input.password;

            // Save the user entity to the database
            try {
                await user.save();
            } catch (error) {
                throw new Error("Failed to create new user.");
            }

            return user;
        },
    },
};

export default createUserResolver;