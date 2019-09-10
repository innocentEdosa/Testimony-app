import { GraphQLNonNull } from 'graphql';
import userInputType from '../types/userInputType';
import userType from '../types/user';
import loginUser from '../resolvers/loginUser';

module.exports = {
  type: userType,
  description: `This returns a user gotten
  from the database based on the given email
   and password parameters. The meta argument is not been used`,
  args: {
    input: { type: new GraphQLNonNull(userInputType) },
  },
  resolve: (_obj, { input }, { db, req }) => loginUser(input, db, req),
};
