import generateSearchQuery from "../utils/generateSearchQuery.js";

export const searchServices = async ({ query }) => {
    const { mongoQuery } = generateSearchQuery(query);
    console.log(mongoQuery)

   

  //   Promise.resolve(
  //     setTimeout(() => {
  //       console.log(query);
  //     }, 0)
  //   );
};
