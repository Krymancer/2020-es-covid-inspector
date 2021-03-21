const express = require('express');

const establishments = require('./controller/establishment');

const routes = express.Router();

routes.get('/establishments',establishments.index);
routes.post('/establishments/add',establishments.create);

module.exports = routes;