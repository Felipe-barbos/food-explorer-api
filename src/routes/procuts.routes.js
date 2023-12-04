const { Router } = require("express");


const CreateProductsController = require("../controllers/Product/CreateProductsController");
const UpdateProductController = require("../controllers/Product/UpdateProductController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");




const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const updateProductController = new UpdateProductController();


productsRoutes.use(ensureAuthenticated);

productsRoutes.post("/create", verifyUserAuthorization(["admin, chef"]), createProductsController.handle);
productsRoutes.patch("/update/:id", verifyUserAuthorization(["chef", "admin"]), updateProductController.handle);

module.exports = productsRoutes;


