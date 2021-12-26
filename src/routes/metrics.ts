import { register } from "prom-client";

module.exports = async function (app, environment) {
  const client = require('prom-client');
  const express = require('express');
  const enviornment = require('../middleware/environment');
  const env = enviornment.default;
  // Middleware

  app.get('/metrics', async (req, res) => {
    console.log('[REQ]: /metrics');
    res.setHeader('Content-Type', register.contentType);
    res.send(await register.metrics());
  });

  return app;
};
