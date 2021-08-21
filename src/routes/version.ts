module.exports = async function (app, environment) {
  const express = require('express');
  const enviornment = require('../middleware/environment')
  const env = enviornment.default
  // Middleware

  app.get('/version', (req, res) => {
    console.log(env);
    res.status(200).json({
      serviceName: env.SERVICE_VERSION,
      servicePort: env.SERVICE_PORT,
      serviceVersion: env.SERVICE_VERSION,
    });
  });

  return app;
};
