import cryptoRandomString from 'crypto-random-string';
import bcrypt from 'bcrypt';
import createUserValidation from '../../helpers/validations/createUserValidation';
import throwError from '../../helpers/throwError';
import { sendVerificationEmail } from '../../helpers/sendEmail';

const createUserResolver = async (input, db, id) => {
  const err = createUserValidation(input);
  if (err) {
    return throwError('invalid input', err, 422);
  }
  try {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const [newUser, isCreated] = await db.user.findOrCreate({
      where: { email: input.email },
      defaults: {
        id,
        ...input,
        password: hashedPassword,
      },
    });
    if (!isCreated) {
      return throwError('Error', { email: ['Email has already been used'] }, 422);
    }
    const verifyToken = await db.verifyUser.create({
      userRef: id,
      token: cryptoRandomString({ length: 10, type: 'url-safe' }),
    });
    // note that emailSender is asynchronous but we are not accounting for that
    // if the user does not get a mail, they would just ask for the mail to be resent to them
    sendVerificationEmail({ email: input.email }, verifyToken.dataValues.token);
    // const token = jwt.sign({ email: input.email, id }, process.env.JWT);
    newUser.dataValues.token = 'verify your account to get token';
    return newUser.dataValues;
  } catch (error) {
    return error;
  }
};

export default createUserResolver;
