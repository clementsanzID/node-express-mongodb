const db = require("../models");
const User = db.User;

exports.create = (req, res) => {
    if (!req) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const user = new User({
        state: req.body.state,
        login: req.body.login,
        hashKey: req.body.hashKey,
        accessLevel: req.body.accessLevel,
        quality: req.body.quality,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        name: req.body.name,
        ssn: req.body.ssn,
        email: req.body.email
    });

    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
}

exports.findAll = (req, res) => {
    const search = req.query.search;
    var condition = search ? {
        name: {$regex: new RegExp(search), $options: "i"}
    } : {};
    User.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}
