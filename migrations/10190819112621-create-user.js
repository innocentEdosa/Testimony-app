module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: {
          args: [/^[a-z]+$/i],
          msg: 'Error: first name can only contain letters',
        },
        len: {
          args: [[2, 30]],
          msg: 'Error: Length of first name cannot be less than two or more than 30',
        },
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: {
          args: [/^[a-z]+$/i],
          msg: 'Error: first name can only contain letters',
        },
        len: {
          args: [[2, 30]],
          msg: 'Error: Length of first name cannot be less than two or more than 30',
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    meta: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('user'),
};
