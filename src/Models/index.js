import Sequelize from 'sequelize';

const sequelize = new Sequelize('weconnect', 'emery', '', {
  host: 'localhost',
  dialect: 'postgres'
});

const models = {
  User: sequelize.import('./User'),
  Business: sequelize.import('./Business'),
  Review: sequelize.import('./Review'),
  PasswordReset: sequelize.import('./PasswordReset'),
  Token: sequelize.import('./Token')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
