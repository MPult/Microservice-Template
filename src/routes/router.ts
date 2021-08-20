// This file will import all the routes in the 'routes' directory
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');

module.exports = function (app) {
  const routes = [];
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'router.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') return;
    const name = file.substr(0, file.indexOf('.'));
    routes.push(name);
    require(`./${name}`)(app);
  });
  console.log(`[Startup]: Mounted routes ${routes}`);
};
