import client from "../client";
export default {
  Mutation: {
    createMovie: (_, { title, year, genre }) =>
      client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      }),
    deleteMovie: async (_, { id }) => await client.movie.delete({ where: { id } }),
    updateMovie: async (_, { id, year }) =>
      await client.movie.update({ where: { id }, data: { year } }),
  },
};