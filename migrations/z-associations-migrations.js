module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('testimonies', 'userRef', {
    type: Sequelize.UUID,
    references: {
      model: 'user',
      key: 'id',
    },
  }).then(() => queryInterface.addColumn('verifyUser', 'userRef', {
    type: Sequelize.UUID,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: 'user',
      key: 'id',
    },
  })),
  down: (queryInterface) => queryInterface.removeColumn(
    'testimonies',
    'userRef',
  ).then(() => queryInterface.removeColumn(
    'verifyUser',
    'userRef',
  )),
};
