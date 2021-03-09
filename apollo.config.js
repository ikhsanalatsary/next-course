module.exports = {
  client: {
    includes: ["pages/**", "components/**"],
    service: {
      name: "next-course",
      url: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    },
  },
};
