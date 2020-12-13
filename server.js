const express = require("express");
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());

const session = require('express-session');
app.use(session({
                    resave: false,
                    saveUninitialized: true,
                    secret: 'any string'
                }));


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mrspacman:vintagegames1993@snippetcluster0.ojztr.mongodb.net/snippets?retryWrites=true&w=majority',
                 {useNewUrlParser: true,
                     useUnifiedTopology: true});

require("./controllers/snippet.controller.server")(app);
require("./controllers/express-session")(app);

app.listen(process.env.PORT || 3000, () =>
    console.log("Server is running @3000 ...")
);
