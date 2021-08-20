module.exports = async function (app) {
  const express = require('express');

  app.get('/version', (req, res) => {
    res.send('Version Endpoint');
  });

  return app;
};
