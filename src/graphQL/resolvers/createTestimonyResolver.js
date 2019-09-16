import throwError from '../../helpers/throwError';
import createTestimonyValidation from '../../helpers/validations/createTestimonyValidation';

const createTestimonyResolver = async (input, id, db, req) => {
  try {
    const { Op } = db.Sequelize;
    const { userId: userRef, isAuth, isVerified } = req;
    if (!isAuth || !isVerified) {
      return throwError('unauthorized', { authorization: 'We do not know you or your account has not been verified' }, 401);
    }
    const err = createTestimonyValidation(input);
    if (err) {
      return throwError('invalid input', err, 422);
    }
    const [testimony, isTestimonyCreated] = await db.testimonies.findOrCreate({
      defaults: {
        id,
        ...input,
        userRef,
      },
      where: {
        title: input.title,
        [Op.and]: { userRef },
      },
      include: [{
        model: db.user,
        as: 'author',
        required: false,
      }],
    });
    if (!isTestimonyCreated) {
      return throwError('You cannot create the same testimony twice', { error: 'Possible duplicate' }, 422);
    }
    return testimony.dataValues;
  } catch (error) {
    const code = error.parent || null;
    if (code === '23503') {
      throwError('User does not exit', { error: 'user not found' }, 401);
    }
    return error;
  }
};

export default createTestimonyResolver;
