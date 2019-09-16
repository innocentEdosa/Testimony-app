import { GraphQLList } from 'graphql';
import { fetchAllTestimoniesType } from '../types/testimonyType';
import allTestimonyResolver from '../resolvers/allTestimonyResolver';

module.exports = {
  type: new GraphQLList(fetchAllTestimoniesType),
  description: 'This query returns all the testimonies currently in the database',
  args: {},
  resolve: (_obj, args, { db, req }) => allTestimonyResolver(db, req),
};
