/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
if (!process.env.NEXT_PUBLIC_GRAPHQL_URI) {
  require('dotenv').config({
    path: '.env.local',
  });
}
module.exports = {
  client: {
    includes: ['pages/**', 'components/**'],
    service: {
      name: 'next-course',
      url: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    },
  },
};
