const { client } = require('./connection');

const getVillains = () => {
    return client.query('SELECT * FROM movie_villains;')
        .then(result => result.rows);
}

const getVillainById = (id) => {
    return client.query(
        'SELECT * FROM movie_villains WHERE id=$1;',
        [id] // This array will be sanitized for safety.
    ).then(result => result.rows[0]);
}

module.exports = {
    getVillains,
    getVillainById
};
