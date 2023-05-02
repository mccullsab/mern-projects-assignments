const Player = require('../models/players.models.js')

const controller = {
    testRoute: (req, res) => {
        res.send("Our express api server is now sending this over to the browser");
    },

    getAll: (req, res) => {
        Player.find()
            .then((allplayers) => {
                res.json({ player: allplayers });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    create: (req, res) => {
        Player.create(req.body)
            .then((newlyCreatedplayer) => {
                res.json({ player: newlyCreatedplayer });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    getOne: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then((oneplayer) => {
                res.json({ player: oneplayer });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    update: (req, res) => {
        Player.findOneAndUpdate({ _id: req.params.id }, req.body, { 
            new: true,
            // BLACKBELT
            runValidators: true
        })
            .then((updatedplayer) => {
                res.json({ player: updatedplayer });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    delete: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json({ result });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    }
}

module.exports = controller