import jwt from 'jsonwebtoken';
import throwError from '../../helpers/throwError';


const verifyUserResolver = async (
  db,
  { variables = { email: 'some@gmail.com', token: 'token' } },
) => {
  const { token } = JSON.parse(variables);
  try {
    const userData = await db.verifyUser.findOne({
      where: {
        token,
      },
      attributes: ['token', 'userRef'],
    });
    if (userData) {
      const { userRef } = userData.dataValues;
      const [, [updatedUser]] = await db.user.update(
        {
          isVerified: true,
        },
        {
          where: {
            id: userRef,
          },
          returning: true,
        },
      );
      const userToken = jwt.sign(
        {
          email: updatedUser.dataValues.email,
          id: updatedUser.dataValues.id,
        },
        process.env.JWT,
      );
      updatedUser.dataValues.token = userToken;
      return updatedUser.dataValues;
    }
    return throwError('Error', { email: ['Email Verification Failed'] }, 400);
  } catch (error) {
    return error;
  }
};

export default verifyUserResolver;
