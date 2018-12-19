import dotenv from 'dotenv';
import app from './src';

const loadConfig = dotenv.config();

if (loadConfig.error) {
  console.log('No config file found(.env)');
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on ${port}  🚀`);
});
