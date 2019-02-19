import Sequelize from 'sequelize';

const db = new Sequelize(
  process.env.DB_NAME || 'wedbect',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_TYPE || 'postgres',
    logging: false
  }
);

const models = {
  User: db.import('./User'),
  Business: db.import('./Business'),
  Review: db.import('./Review'),
  PasswordReset: db.import('./PasswordReset'),
  Token: db.import('./Token')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

models.db = db;
models.Sequelize = Sequelize;

export default models;
