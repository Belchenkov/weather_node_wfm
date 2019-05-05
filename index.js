const express = require('express');
const bodyParser = require('body-parser');

const weatherRequest = require('./requests/weather.request');

const app = express();

app.set('view engine', 'ejs');

// Set Public Folder
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', async (req, res) => {
    const {city} = req.body;

    const {weather, error} = await weatherRequest(city);

    console.log(weather);
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server has started localhost:${PORT}`);
});
