const { Router } = require("express");


const ProductsController = require("../controllers/Product/ProductsController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");



const productsRoutes = Router();

const productsController = new ProductsController();


productsRoutes.use(ensureAuthenticated);

productsRoutes.post("/create", verifyUserAuthorization(["admin"]), productsController.handle);


module.exports = productsRoutes;


