import { GraphQLNonNull } from 'graphql';
import userType from '../types/user';
import userInputType from '../types/userInputType';
import createUserResolver from '../resolvers/createUserResolver';

module.exports = {
  type: userType,
  args: {
    input: {
      type: new GraphQLNonNull(userInputType),
    },
  },
  resolve: async (_obj, { input }, { db, id }) => createUserResolver(input, db, id),
};
