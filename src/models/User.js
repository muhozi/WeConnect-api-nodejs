const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    activation_token: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.associate = models => {
    User.hasMany(models.Business);
    User.hasMany(models.Review);
    User.hasMany(models.PasswordReset);
    User.hasMany(models.Token);
  };

  return User;
};

export default user;
