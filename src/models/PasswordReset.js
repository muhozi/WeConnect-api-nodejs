const passwordReset = (sequelize, DataTypes) => {
  const PasswordReset = sequelize.define('passwordReset', {
    resetToken: {
      type: DataTypes.STRING
    },
    expiresAt: {
      type: DataTypes.STRING
    }
  });

  PasswordReset.associate = models => {
    PasswordReset.belongsTo(models.User);
  };

  return PasswordReset;
};

export default passwordReset;
