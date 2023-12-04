const { Router } = require("express");
const CreateOrderController = require("../controllers/Order/CreateOrderController");
const ShowOrderController = require("../controllers/Order/ShowOrderController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ShowIndexController = require("../controllers/Order/ShowIndexController");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const createOrderController = new CreateOrderController();
const showOrderService = new ShowOrderController();
const showIndexController = new ShowIndexController();
const ordersRoutes = Router();




ordersRoutes.use(ensureAuthenticated);
ordersRoutes.post("/create", verifyUserAuthorization(["admin"]), createOrderController.handle);
ordersRoutes.get("/show/:id", showOrderService.handle);
ordersRoutes.get("/index", showIndexController.handle);


module.exports = ordersRoutes;