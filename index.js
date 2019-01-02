import dotenv from 'dotenv';
import swaggerTools from 'swagger-tools';
import swaggerDoc from './docs/api.json';
import app from './src';

const loadConfig = dotenv.config();

if (loadConfig.error) {
  console.log('No config file found(.env)');
}

const port = process.env.PORT || 5000;
// swaggerRouter configuration
const options = {
  controllers: `${__dirname}/src/controllers`,
  useStubs: process.env.NODE_ENV === 'development'
};

swaggerTools.initializeMiddleware(swaggerDoc, middleware => {
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter(options));
  app.use(middleware.swaggerUi());
  app.listen(port, () => {
    console.log(`App running on ${port}  🚀`);
  });
});
