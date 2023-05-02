const JokeConroller = require('../controllers/jokes.controllers')


const routes = (app) => {

    // ------GET -------

    app.get("/api", JokeConroller.testRoute);

    app.get("/api/jokes", JokeConroller.getAllJokes);

    app.get("/api/jokes/random", JokeConroller.getRandomJoke)

    // ------POST Get form data-----

    app.post("/api/jokes", JokeConroller.createOneJoke);

    // -----GET data from a URL ----------

    app.get("/api/jokes/:id", JokeConroller.getOneJoke);

    //--------Update -----------
    
    app.put("/api/jokes/update/:id", JokeConroller.updateOneJoke);

    // -------------Delete----------

    app.delete("/api/jokes/delete/:id", JokeConroller.deleteOneJoke);
};

module.exports = routes