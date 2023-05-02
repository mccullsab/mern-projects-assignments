const Court = require('../models/courts.models.js')

const controller = {
    testRoute: (req, res) => {
        res.send("Our express api server is now sending this over to the browser");
    },

    getAll: (req, res) => {
        Court.find()
            .then((allCourts) => {
                res.json({ court: allCourts });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    create: (req, res) => {
        Court.create(req.body)
            .then((newlyCreatedCourt) => {
                res.json({ court: newlyCreatedCourt });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    getOne: (req, res) => {
        Court.findOne({ _id: req.params.id })
            .then((oneCourt) => {
                res.json({ court: oneCourt });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    update: (req, res) => {
        Court.findOneAndUpdate({ _id: req.params.id }, req.body, { 
            new: true,
            // BLACLBELT
            runValidators: true
        })
            .then((updatedCourt) => {
                res.json({ court: updatedCourt });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    delete: (req, res) => {
        Court.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json({ result });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    }
}

module.exports = controller