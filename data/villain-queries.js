const { client } = require('./connection');

const getVillains = () => {
    return client.query('SELECT * FROM movie_villains;')
        .then(result => result.rows);
};

const getVillainById = (id) => {
    return client.query(
        'SELECT * FROM movie_villains WHERE id=$1;',
        [id] // This array will be sanitized for safety.
    ).then(result => result.rows[0]);
};

const updateVillain = (id, villain, movie) => {
    return client.query(
        'UPDATE movie_villains SET villain=$2, movie=$3 WHERE id=$1;',
        [id, villain, movie]
    );
};

module.exports = {
    getVillains,
    getVillainById,
    updateVillain
};
