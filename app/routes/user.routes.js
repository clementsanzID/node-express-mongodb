module.exports = app => {
    const User = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/", User.create);

    router.get("/getAll", User.findAll);

    app.use("/api/users", router);
};
