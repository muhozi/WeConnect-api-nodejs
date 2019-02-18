import models from './models';

const syncDB = () => models.sequelize.sync();
export default syncDB;
