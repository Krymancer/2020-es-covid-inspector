const express = require('express');

const establishments = require('./controller/establishment');

const routes = express.Router();

routes.get('/index',establishments.index);
routes.post('/create',establishments.create);
routes.post('/login',establishments.login);
routes.post('/entrance',establishments.entrance);
routes.post('/report',establishments.report);
routes.post('/customers',establishments.customers);

module.exports = routes;