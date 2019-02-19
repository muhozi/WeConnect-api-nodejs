const token = (sequelize, DataTypes) => {
  const Token = sequelize.define('token', {
    access_token: {
      type: DataTypes.STRING,
      unique: true
    },
    expires_at: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Token.associate = models => {
    Token.belongsTo(models.User);
  };

  return Token;
};

export default token;
