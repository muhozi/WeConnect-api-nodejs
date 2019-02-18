import swaggerTools from 'swagger-tools';
import swaggerDoc from './docs/api.json';
import app from './src';
import models from './src/models';

const port = process.env.PORT || 5000;
const options = {
  controllers: `${__dirname}/src/controllers`,
  useStubs: process.env.NODE_ENV === 'development'
};
swaggerTools.initializeMiddleware(swaggerDoc, middleware => {
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter(options));
  app.use(middleware.swaggerUi());
  const syncDB = () => models.db.sync();
  syncDB().then(() => {
    app.listen(3000, () => {
      console.log(`App running on ${port}  🚀`);
    });
  });
});
