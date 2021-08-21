module.exports = async function (app, environment) {
  const express = require('express');
  // Middleware

  app.get('/version', (req, res) => {
    res.status(200).json({
      v: environment.SERVICE_VERSION,
    });
  });

  return app;
};
