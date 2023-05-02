const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------DATA----------

const jokes = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// ------GET -------

app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/jokes", (req, res) => {
    res.json(jokes);
});

// ------POST Get form data-----

app.post("/api/jokes", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the jokes array for now...
    // later on this will be inserted into a database
    jokes.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});

// -----GET data from a URL ----------


app.get("/api/jokes/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the jokes array we could return one user this way
    res.json(jokes[req.params.id]);
});

//--------Update -----------
app.put("/api/jokes/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the jokes array we can replace the user like so
    jokes[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});

// -------------Delete----------

app.delete("/api/jokes/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the jokes array we can remove the user like so
    jokes.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});


const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);