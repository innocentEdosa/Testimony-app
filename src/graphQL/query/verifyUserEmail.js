import userType from '../types/user';
import verifyUserResolver from '../resolvers/verifyUserResolver';

module.exports = {
  type: userType,
  resolve: (_, args, { db, req }) => verifyUserResolver(db, req.query),
};
