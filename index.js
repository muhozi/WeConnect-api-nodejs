import express from 'express';
import dotenv from 'dotenv';
import routes from './api/routes';

const loadConfig = dotenv.config();
if (loadConfig.error) {
  console.log('No config file found(.env)');
}

const app = express();

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on ${port}  🚀`);
});
