import { v4 as uuid } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import User from "@/modules/users/models/user.schema"

const readUser = {
    Query: {
        user(parent, args, contextValue, info) {
            return // find and return one user from User model using Mongoose
        }
    }
}
