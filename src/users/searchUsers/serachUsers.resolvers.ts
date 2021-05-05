import client from "../../client";

export default {
  Query: {
    searchUsers: async (_, { keyword }) => {
      return await client.user.findMany({
        where: {
          userName: {
            startsWith: keyword,
          },
        },
      });
    },
  },
};
