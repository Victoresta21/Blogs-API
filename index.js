const express = require('express');
const user = require('./routers/user');
const error = require('./middlewares/error');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`ouvindo porta ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(express.json());
app.use('/user', user);

app.use(error);