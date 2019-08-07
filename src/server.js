const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://aldemir_gomes:24092707ag@cluster0-rdd9l.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(3333);

