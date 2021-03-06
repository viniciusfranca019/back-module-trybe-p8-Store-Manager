const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routers/productsRouter');
const salesRouter = require('./routers/salesRouter');
const errorHandler = require('./middleware/errorMiddle');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/products', productsRouter, errorHandler);
app.use('/sales', salesRouter, errorHandler);

// não remova esse endpoint, e para o  avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const { env: { PORT } } = process;

const PORT_N = PORT || 3000;

app.listen(PORT_N, () => console.log(`Server listening on port ${PORT_N}`));
