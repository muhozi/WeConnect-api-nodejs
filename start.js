// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register')({
  presets: ['@babel/env']
});

/**
 * Load virtual environment variabled from .env
 */
require('dotenv').config();

// Import the rest of our application.
module.exports = require('./index.js');
