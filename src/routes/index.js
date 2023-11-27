const { Router } = require("express");
const usersRoutes = require("./users.routes");
const sessionRoutes = require("./sessions.routes");
const productsRoutes = require("./procuts.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/session", sessionRoutes);
routes.use("/products", productsRoutes);

module.exports = routes;