const business = (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    }
  });

  Business.associate = models => {
    Business.belongsTo(models.User);
    Business.hasMany(models.Review);
  };

  return Business;
};

export default business;
