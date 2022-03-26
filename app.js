const express = require('express');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.set('views', __dirname +'/views');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
  });

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
  });

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
  });

app.get('/photo-gallery', (request, response) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
  });


  app.listen(3000);