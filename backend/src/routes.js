const express = require('express');

const establishments = require('./controller/establishment');

const routes = express.Router();

routes.get('/index',establishments.index);
routes.post('/create',establishments.create);
routes.post('/login',establishments.login);
routes.post('/entrance',establishments.entrance);
routes.post('/report',establishments.report);

module.exports = routes;