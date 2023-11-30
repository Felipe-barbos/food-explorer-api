const { Router } = require("express");
const CreateOrderController = require("../controllers/Order/CreateOrderController");
const ShowOrderController = require("../controllers/Order/ShowOrderController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


const createOrderController = new CreateOrderController();
const showOrderService = new ShowOrderController();
const ordersRoutes = Router();




ordersRoutes.use(ensureAuthenticated);
ordersRoutes.post("/create", createOrderController.handle);
ordersRoutes.get("/show/:id", showOrderService.handle);


module.exports = ordersRoutes;