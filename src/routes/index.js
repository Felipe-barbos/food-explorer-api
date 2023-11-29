const { Router } = require("express");
const usersRoutes = require("./users.routes");
const sessionRoutes = require("./sessions.routes");
const productsRoutes = require("./procuts.routes");
const ordersRoutes = require("./orders.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/session", sessionRoutes);
routes.use("/products", productsRoutes);
routes.use("/orders", ordersRoutes);

module.exports = routes;