require('dotenv').config();

const { getVillains } = require('./data/villain-queries');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log('Express app listening on port:', PORT);
});

app.get('/movie-villains', (req, res) => {
    getVillains().then(villains => {
        const templateVars = {villains};
        res.render('movie-villains/index', templateVars);
    });
});
