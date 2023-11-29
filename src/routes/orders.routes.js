const { Router } = require("express");
const CreateOrderController = require("../controllers/CreateOrder/CreateOrderController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


const createOrderController = new CreateOrderController();
const ordersRoutes = Router();




ordersRoutes.use(ensureAuthenticated);
ordersRoutes.use("/create", createOrderController.handle);


module.exports = ordersRoutes;