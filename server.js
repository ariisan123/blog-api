require('./dotenv');
require('./database');

const express = require('express');
const { json, urlencoded } = require('body-parser');
const apiRouter = require('./routes/index');
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log(`Conectado en puerto ${process.env.PORT}`);
});
