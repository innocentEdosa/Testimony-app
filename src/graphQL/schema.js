import {
  GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull,
} from 'graphql';
import userType from './types/user';
import addUserMutation from './mutation/addUser';
import verifyUserQuery from './query/verifyUserEmail';

const TestimonyHubQuery = new GraphQLObjectType({
  name: 'TestimonyHubQuery',
  fields: {
    user: {
      type: userType,
      description: 'This should return a user gotten based on the user email and password',
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        password: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (obj, args, { db }) => {
        await db.user.findOne();
      },
    },
    verifyUser: verifyUserQuery,
  },
});

const TestimonyHubMutation = new GraphQLObjectType({
  name: 'TestimonyHubMutation',
  fields: {
    addUser: addUserMutation,
  },
});

const schema = new GraphQLSchema({
  query: TestimonyHubQuery,
  mutation: TestimonyHubMutation,
});

export default schema;
