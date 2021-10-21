const axios = require('axios').default;

const getJoke = async () => {
  return axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
  .then((response) => response.data)
  .then((data) => data.joke);
};

module.exports = { getJoke };