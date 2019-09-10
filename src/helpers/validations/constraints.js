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
      tooShort: '^ Last name should be 2 or more letters',
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
