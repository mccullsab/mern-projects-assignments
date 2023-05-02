// express is a variable. it can be unicorns
const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TEMP DATABASE
const animals = [
    { species: 'fish', name: 'fred', habitat: 'water' },
    { species: 'alpaca', name: 'Alpaca Jackson', habitat: 'field' },
    {
        species: 'snake',
        name: 'William Snakespear',
        habitat: 'Hole in the ground in the desert',
    },
    { species: 'lion', name: 'Alex the Lion', habitat: 'Savannah' },
    { species: 'rabbit', name: 'fluffy', habitat: 'petting zoo' },
    { species: 'whale', name: 'Bubba', habitat: 'Pacific Ocean' },
];

// ROUTES
// route functions take two params
// the route, and a callback
// the callback func has the parameters request and response

// Restful routing, all API routes start with api
app.get('/api', (req, res) => {
    res.json({ message: 'I really like falafel' });
});

app.get('/api/animals', (req, res) => {
    res.json(animals);
});

app.post('/api/animals', (req, res) => {
    console.log(req.body);

    animals.push(req.body);

    res.json({ status: 'ok' });
});

app.get('/api/animals/:id', (req, res) => {
    res.json(animals[req.params.id]);
});

app.put('/api/animals/:id', (req, res) => {
    animals[req.params.id] = req.body;

    res.json({ status: 'ok' });
});

app.delete('/api/animals/:id', (req, res) => {
    // return a new array, but it'll reassign the variable
    // remove from a starting index a certain amount of elements
    animals.splice(req.params.id, 1);

    res.json({ status: 'ok' });
});

// two params, the port number, and a callback
app.listen(port, () => console.log(`Running express server on port: ${port}`));