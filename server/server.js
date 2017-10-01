const express = require('express');
const app = express();
const webRoutes = require('./routes/web.js');
const exphbs = require('express-handlebars');
const path = require('path');

const port = 3000;

app.use(express.static('client/public'));

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir:'client/src/views/layouts',
}));

app.set('views', path.join(__dirname, '../client/src/views'));

app.set('view engine', 'hbs');

app.use(webRoutes);

app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
