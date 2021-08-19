const express = require('express');
import 'dotenv/config'

const app = express();

// Middleware
import environment from './middleware/environment';

app.listen(environment.SERVICE_PORT, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`[Startup]: ${environment.SERVICE_NAME} Is up on port ${environment.SERVICE_PORT}`);
});
