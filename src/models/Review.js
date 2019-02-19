const review = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    description: {
      type: DataTypes.STRING
    }
  });

  Review.associate = models => {
    Review.belongsTo(models.User);
    Review.belongsTo(models.Business);
  };

  return Review;
};

export default review;
