const { Router } = require("express");


const CreateProductsController = require("../controllers/Product/CreateProductsController");
const UpdateProductController = require("../controllers/Product/UpdateProductController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ActiveProductsController = require("../controllers/Product/ActiveProductsController");



const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const updateProductController = new UpdateProductController();
const activeProductsController = new ActiveProductsController();


productsRoutes.use(ensureAuthenticated);

productsRoutes.post("/create", verifyUserAuthorization(["admin"]), createProductsController.handle);
productsRoutes.patch("/update/:id", verifyUserAuthorization(["admin"]), updateProductController.handle);
productsRoutes.put("/active/:id", verifyUserAuthorization(["admin"]), activeProductsController.handle);

module.exports = productsRoutes;


