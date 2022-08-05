require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { appendFile } = require('fs');

const app = express();

app.set('view engine', 'ejs');
