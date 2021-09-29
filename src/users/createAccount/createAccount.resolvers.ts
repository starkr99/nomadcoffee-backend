import { Resolvers } from "../../types";
import bcrypt from "bcrypt";

export const resolvers: Resolvers = {
  Query: {
    Users: async (_, {}, { client }) => {
      try {
        return {
          ok: true,
          users: await client.user.findMany(),
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
    User: async (_, { id }, { client }) => {
      try {
        return {
          ok: true,
          user: await client.user.findUnique({ where: { id } }),
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
  Mutation: {
    createUser: async (
      _,
      { username, password, name, email, location, githubUsername },
      { client }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser != null) {
          throw new Error("This username or email is already taken");
        }

        const uglyPassword = await bcrypt.hash(password, 10);
        const createdUser = await client.user.create({
          data: {
            username,
            password: uglyPassword,
            email,
            name,
            location,
            githubUsername,
          },
        });

        if (!createdUser) throw new Error("Error on createUser");

        return {
          ok: true,
          user: createdUser,
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};
