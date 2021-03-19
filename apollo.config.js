module.exports = {
  client: {
    includes: ['pages/**', 'components/**'],
    service: {
      name: 'next-course',
      localSchemaFile: './graphql.schema.json',
    },
  },
};
