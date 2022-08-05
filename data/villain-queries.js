const { client } = require('./connection');

// INDEX:
const getVillains = () => {
    return client.query('SELECT * FROM movie_villains ORDER BY id DESC;')
        .then(result => result.rows);
};

// SHOW:
const getVillainById = (id) => {
    return client.query(
        'SELECT * FROM movie_villains WHERE id=$1;',
        [id] // This array will be sanitized for safety.
    ).then(result => result.rows[0]);
};

// UPDATE:
const updateVillain = (id, villain, movie) => {
    return client.query(
        'UPDATE movie_villains SET villain=$2, movie=$3 WHERE id=$1;',
        [id, villain, movie]
    );
};

// CREATE:
const createVillain = (villain, movie) => {
    return client.query(
        'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);',
        [villain, movie]
    );
};

// DELETE:

module.exports = {
    getVillains,
    getVillainById,
    updateVillain,
    createVillain,
};
