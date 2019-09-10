import validate from 'validate.js';
import {
  passwordConstraint,
  emailConstraint,
} from './constraints';

const loginUserConstraint = {
  ...emailConstraint,
  ...passwordConstraint,
};

const loginUserValidation = (input) => {
  const err = validate({ ...input }, loginUserConstraint);
  return err;
};

export default loginUserValidation;
