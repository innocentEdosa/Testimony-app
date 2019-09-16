import validate from 'validate.js';

validate.validators.type.types.emptyType = (value) => {
  if (!value) {
    return false;
  }
  return true;
};
validate.validators.type.messages.emptyType = '^ sending an empty or undefined description is simply wrong';
export const emailConstraint = {
  email: {
    presence: true,
    email: {
      message: '%{value} is not valid',
    },
  },

};

export const passwordConstraint = {
  password: {
    presence: true,
    length: {
      minimum: 8,
      tooShort: 'must be %{count} or more characters',
    },
  },
};

const pattern = /^[A-Za-z]+$/;
export const firstNameConstraint = {
  firstName: {
    presence: true,
    format: {
      pattern,
      message: '^ First name can only contain letters',
    },
    length: {
      minimum: 2,
      maximum: 30,
      tooLong: '^ First name should not be more than 30 characters',
      tooShort: '^ First name should be 2 or more letters',
    },
  },
};

export const lastNameConstraint = {
  lastName: {
    presence: true,
    format: {
      pattern,
      message: '^ Last name can only contain letters',
    },
    length: {
      minimum: 2,
      maximum: 30,
      tooLong: '^ Last name should not be more than 30 characters',
      tooShort: '^ Last name should be 2 or more letters',
    },
  },
};

export const jsonConstraint = {
  meta: {
    presence: true,
    type: {
      type: (value) => {
        try {
          JSON.parse(value);
          return true;
        } catch (error) {
          return false;
        }
      },
    },
  },
};

export const testimonyTitleConstraint = {
  title: {
    presence: true,
    format: {
      pattern,
      message: '^ Title can only contain letters',
    },
  },
};

export const testimonyDescriptionConstraint = {
  description: {
    presence: true,
    type: 'emptyType',
    length: {
      minimum: 3,
      maximum: 900,
      tooShort: '^ description cannot be less than 30 characters',
      tooLong: '^ description should not be more than 900 words',
    },
  },
};
