// Import Libraries
import 'dotenv/config';
import client, { register } from 'prom-client';
import express from 'express';

// Middleware
import environment from './middleware/environment';

const app = express();

client.collectDefaultMetrics({
  labels: { NODE_APP_INSTANCE: process.env.NODE_APP_INSTANCE },
});

require('./routes/router')(app); // Requires external routes

app.listen(environment.SERVICE_PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`[Startup]: ${environment.SERVICE_NAME} Is up on port ${environment.SERVICE_PORT}`);
});

module.exports = app;
module.exports = environment;
