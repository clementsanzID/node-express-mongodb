module.exports = app => {
  const Tutorial = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Tutorial.create);

  // Retrieve all Tutorials
  router.get("/getAll", Tutorial.findAll);

  // Retrieve all published Tutorials
  router.get("/published", Tutorial.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/get/:id", Tutorial.findOne);

  // Update a Tutorial with id
  router.put("/update/:id", Tutorial.update);

  // Delete a Tutorial with id
  // router.delete("/:id", Tutorial.delete);

  // Create a new Tutorial
  router.delete("/deleteAll", Tutorial.deleteAll);

  app.use("/api/tutorials", router);
};
