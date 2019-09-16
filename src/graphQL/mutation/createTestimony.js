import { GraphQLNonNull } from 'graphql';
import { createTestimonyType, testimonyInputType } from '../types/testimonyType';
import createTestimonyResolver from '../resolvers/createTestimonyResolver';

module.exports = {
  type: createTestimonyType,
  args: {
    input: { type: new GraphQLNonNull(testimonyInputType) },
  },
  resolve: (obj, { input }, { db, req, id }) => createTestimonyResolver(input, id, db, req),
};
