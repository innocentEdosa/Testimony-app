
module.exports = (sequelize, DataTypes) => {
  const verifyUser = sequelize.define('verifyUser', {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  verifyUser.associate = () => {
  };
  return verifyUser;
};
