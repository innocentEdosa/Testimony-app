
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('testimonies', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [[0, 100]],
          msg: 'Error: Length of title must be less than 100',
        },
      },
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    meta: {
      type: Sequelize.JSON,
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
  down: (queryInterface) => queryInterface.dropTable('testimonies'),
};
