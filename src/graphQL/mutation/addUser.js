import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import userType from '../types/user';
import createUserResolver from '../resolvers/createUserResolver';

const userInputType = new GraphQLInputObjectType({
  name: 'userInputType',
  fields: {
    // firstName: {
    //   type: new GraphQLNonNull(GraphQLString),
    // },
    // lastName: {
    //   type: new GraphQLNonNull(GraphQLString),
    // },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    meta: {
      type: GraphQLString,
    },
  },
});

module.exports = {
  type: userType,
  args: {
    input: {
      type: new GraphQLNonNull(userInputType),
    },
  },
  resolve: async (_obj, { input }, { db, id }) => createUserResolver(input, db, id),
};
