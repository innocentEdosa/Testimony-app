import {
  GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull,
} from 'graphql';
import userType from './types/user';
import addUserMutation from './mutation/addUser';
import verifyUserQuery from './query/verifyUserEmail';
import loginUserQuery from './query/loginUser';

const TestimonyHubQuery = new GraphQLObjectType({
  name: 'TestimonyHubQuery',
  fields: {
    verifyUser: verifyUserQuery,
    loginUser: loginUserQuery,
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
