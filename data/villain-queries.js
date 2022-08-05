const { client } = require('./connection');

client.query('SELECT * FROM movie_villains;')
    .then(result => result.rows)
    .then(villains => {
        console.log(villains);
    });
