const { Router } = require("express");

const SessionController = require("../controllers/SessionController");

const sessionRoutes = Router();

const sessionController = new SessionController();

sessionRoutes.use("/", sessionController.handle);


module.exports = sessionRoutes;