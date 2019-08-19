
module.exports = (sequelize, DataTypes) => {
  const testimonies = sequelize.define('testimonies', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [[0, 100]],
          msg: 'Error: Length of title must be less than 100',
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    meta: {
      type: DataTypes.JSON,
    },
  }, {
    freezeTableName: true,
  });
  testimonies.associate = () => {

  };
  return testimonies;
};
