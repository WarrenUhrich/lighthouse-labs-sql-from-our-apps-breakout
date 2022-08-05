require('dotenv').config();

const { getVillains, getVillainById, updateVillain } = require('./data/villain-queries');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log('Express app listening on port:', PORT);
});

/******************************************************
 * READ
 ******************************************************/

app.get('/movie-villains', (req, res) => {
    getVillains().then(villains => {
        const templateVars = {villains};
        res.render('movie-villains/index', templateVars);
    });
});

app.get('/movie-villains/:id', (req, res) => {
    getVillainById(req.params.id).then(villain => {
        const templateVars = {villain};
        res.render('movie-villains/show', templateVars);
    });
});

/******************************************************
 * UPDATE
 ******************************************************/

// Edit form.
app.get('/movie-villains/:id/edit', (req, res) => {
    getVillainById(req.params.id).then(villain => {
        const templateVars = { villain };
        res.render('movie-villains/edit', templateVars);
    });
});

// Form submission.
app.post('/movie-villains/:id', (req, res) => {
    updateVillain(req.params.id, req.body.villain, req.body.movie).then(() => {
        res.redirect('/movie-villains/' + req.params.id);
    });
});
