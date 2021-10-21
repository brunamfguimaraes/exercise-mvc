const jokeModel = require('../model/joke');

const listJokes = async (_req, res) => {
    const joke = await jokeModel.getJoke();
    return res.render('jokeView', { joke });
};

module.exports = { listJokes };