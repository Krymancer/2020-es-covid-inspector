const express = require('express');
const cors = require('cors');

require('dotenv').config();

const routes = require('./routes');

const {load} = require('./util/db');

establishments = load();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Covid inspector running at http://localhost:${port}`)
})