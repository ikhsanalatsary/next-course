module.exports = {
  client: {
    includes: ["**/**/*.js"],
    excludes: ["**/node_modules/**"],
    service: {
      name: "course-event-xmzs0a",
      url: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    },
  },
};
