const Joke = require('../models/jokes.models')

const controller = {
    testRoute: (req, res) => {
        res.send("Our express api server is now sending this over to the browser");
    },

    getAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                res.json({ jokes: allJokes });
            })
            .catch((err) =>
                res.json({ message: "whoops - something is not working", error: err })
            );
    },

    getRandomJoke: (req, res) => {
        Joke.find()
            .then((randomJoke) => {
                let rand = Math.floor(Math.random() * randomJoke.length);
                res.json({ random_jokes: randomJoke[rand] });
            })
            .catch((err) =>
                res.json({ message: "whoops - something is not working", error: err })
            );
    },

    createOneJoke: (req, res) => {
        // const newJoke = new Joke(req.body)

        // newJoke.save()
        //     .then((newlyCreatedJoke) => {
        //         res.json({ joke: newlyCreatedJoke });
        //     })
        //     .catch((err) => 
        //         res.json({message: "whoops - something is not working", error: err})
        // );
        console.log(req.body);
        Joke.create(req.body)
            .then((newlyCreatedJoke) => {
                res.json({ joke: newlyCreatedJoke });
            })
            .catch((err) =>
                res.json({ message: "whoops - something is not working", error: err })
            );
    },

    getOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({ joke: oneJoke });
        })
        .catch((err) =>
            res.json({ message: "whoops - something is not working", error: err })
        );
        },

    updateOneJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) =>
            res.json({ message: "whoops - something is not working", error: err })
        );
        },

    deleteOneJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result });
        })
        .catch((err) =>
            res.json({ message: "whoops - something is not working", error: err })
        );
    }
}

module.exports = controller