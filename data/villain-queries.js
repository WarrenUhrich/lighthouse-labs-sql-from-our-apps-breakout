const { client } = require('./connection');

const getVillains = () =>
    client.query('SELECT * FROM movie_villains;')
        .then(result => result.rows);

module.exports = {
    getVillains
};
