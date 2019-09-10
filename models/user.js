module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    // firstName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     is: {
    //       args: [/^[a-z]+$/i],
    //       msg: 'Error: first name can only contain letters',
    //     },
    //     len: {
    //       args: [[2, 30]],
    //       msg: 'Error: Length of first name cannot be less than two or more than 30',
    //     },
    //   },
    // },
    // lastName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     is: {
    //       args: [/^[a-z]+$/i],
    //       msg: 'Error: first name can only contain letters',
    //     },
    //     len: {
    //       args: [[2, 30]],
    //       msg: 'Error: Length of first name cannot be less than two or more than 30',
    //     },
    //   },
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meta: {
      type: DataTypes.JSON,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    freezeTableName: true,
  });
  user.associate = (models) => {
    user.hasMany(models.testimonies, {
      as: 'Testimonies',
      foreignKey: 'userRef',
    });
    user.hasOne(models.verifyUser, {
      as: 'verifyUser',
      foreignKey: 'userRef',
      foreignKeyConstraint: true,
    });
  };
  return user;
};
