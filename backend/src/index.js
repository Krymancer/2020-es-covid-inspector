const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Covid Inspector!');
})

app.listen(port, () => {
  console.log(`Covid inspector running at http://localhost:${port}`)
})