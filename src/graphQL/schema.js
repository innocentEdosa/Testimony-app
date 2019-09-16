import {
  GraphQLSchema, GraphQLObjectType,
} from 'graphql';
import addUserMutation from './mutation/addUser';
import createTestimonyMutation from './mutation/createTestimony';
import verifyUserQuery from './query/verifyUserEmail';
import loginUserQuery from './query/loginUser';
import allTestimoniesQuery from './query/allTestimonies';

const TestimonyHubQuery = new GraphQLObjectType({
  name: 'TestimonyHubQuery',
  fields: {
    verifyUser: verifyUserQuery,
    loginUser: loginUserQuery,
    allTestimony: allTestimoniesQuery,
  },
});

const TestimonyHubMutation = new GraphQLObjectType({
  name: 'TestimonyHubMutation',
  fields: {
    addUser: addUserMutation,
    createTestimony: createTestimonyMutation,
  },
});

const schema = new GraphQLSchema({
  query: TestimonyHubQuery,
  mutation: TestimonyHubMutation,
});

export default schema;
