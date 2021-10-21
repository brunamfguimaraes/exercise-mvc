const express = require('express');

const jokeController = require('./controller/jokeController');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/jokes', jokeController.listJokes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});