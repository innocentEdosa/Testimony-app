import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const userType = new GraphQLObjectType({
  name: 'userType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    // firstName: {
    //   type: new GraphQLNonNull(GraphQLString),
    //   description: 'this is the first name of the user',
    // },
    // lastName: {
    //   type: new GraphQLNonNull(GraphQLString),
    //   description: 'this is the last name of the user',
    // },
    meta: {
      type: GraphQLString,
    },
    token: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default userType;
