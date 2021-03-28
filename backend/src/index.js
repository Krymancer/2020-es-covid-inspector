const express = require('express');
const cors = require('cors');

const routes = require('./routes');

establishments = [];

const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Covid inspector running at http://localhost:${port}`)
})