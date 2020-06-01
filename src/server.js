const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// settings
app.set('port', process.env.PORT || 3020);
app.set('views', __dirname + '/views');
app.engine('.hbs', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// middlewares

// routes
app.use(require('./routes/index.routes'))
// static files

module.exports = app;
