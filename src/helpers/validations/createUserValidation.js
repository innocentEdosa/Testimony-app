import validate from 'validate.js';
import {
  emailConstraint,
  passwordConstraint,
  // firstNameConstraint,
  // lastNameConstraint,
  // jsonConstraint,
} from './constraints';

const createUserConstraint = {
  ...emailConstraint,
  ...passwordConstraint,
  // ...jsonConstraint,
};

const createUserValidation = (input) => {
  const err = validate({ ...input }, createUserConstraint);
  return err;
};

export default createUserValidation;
