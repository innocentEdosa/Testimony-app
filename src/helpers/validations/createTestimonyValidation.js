import validate from 'validate.js';
import {
  testimonyTitleConstraint,
  testimonyDescriptionConstraint,

} from './constraints';

const createTestimonyConstraint = {
  ...testimonyTitleConstraint,
  ...testimonyDescriptionConstraint,
};

const createTestimonyValidation = (input) => {
  const err = validate({ ...input }, createTestimonyConstraint);
  return err;
};

export default createTestimonyValidation;
