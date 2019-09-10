import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import throwError from '../../helpers/throwError';
import loginUserValidation from '../../helpers/validations/loginUserValidation';

const loginUser = async (input, db) => {
  const err = loginUserValidation(input);
  if (err) {
    return throwError('Invalid Input', err, 422);
  }
  try {
    const { email: inputEmail, password: inputPassword } = input;
    const user = await db.user.findOne({
      where: {
        email: inputEmail,
      },
    });
    if (!user) { return throwError('Your password and email combination does not match any on the Testimony Hub'); }
    const { email, id, password } = user.dataValues;
    const passwordMatch = await bcrypt.compare(inputPassword, password);
    if (passwordMatch) {
      const token = jwt.sign({ email, id }, process.env.JWT);
      user.dataValues.token = token;
      return user.dataValues;
    }
    return throwError('Your password and email combination does not match any on the Testimony Hub');
  } catch (error) {
    return error;
  }
};

export default loginUser;
