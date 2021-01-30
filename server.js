const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola mundo');
    // let salida = {
    //     nombre: 'Ian',
    //     edad: 21,
    //     url: req.url
    // };

    res.render('home', {
        nombre: 'ian'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuhando peticiones en el puerto ${port}`);
});