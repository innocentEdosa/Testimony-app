import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

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

export default userInputType;
