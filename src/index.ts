import 'dotenv/config';

// Middleware
import environment from './middleware/environment';

const express = require('express');

const app = express();
require('./routes/router')(app); // Requires external routes

app.listen(environment.SERVICE_PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`[Startup]: ${environment.SERVICE_NAME} Is up on port ${environment.SERVICE_PORT}`);
});

module.exports = app;
module.exports = environment;
