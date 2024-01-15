const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");


const CreateProductsController = require("../controllers/Product/CreateProductsController");
const UpdateProductController = require("../controllers/Product/UpdateProductController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ActiveProductsController = require("../controllers/Product/ActiveProductsController");
const ProductsAvatarController = require("../controllers/Product/ProductsAvatarController");
const ShowProductsController = require("../controllers/Product/ShowProductsController");
const ViewProductController = require("../controllers/Product/ViewProductController");



const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const updateProductController = new UpdateProductController();
const activeProductsController = new ActiveProductsController();
const productsAvatarController = new ProductsAvatarController();
const showProductsController = new ShowProductsController();
const viewProductController = new ViewProductController();

const upload = multer(uploadConfig.MULTER);


productsRoutes.use(ensureAuthenticated);

productsRoutes.post("/create", verifyUserAuthorization(["admin"]), createProductsController.handle);
productsRoutes.patch("/update/:id", verifyUserAuthorization(["admin"]), updateProductController.handle);
productsRoutes.put("/active/:id", verifyUserAuthorization(["admin"]), activeProductsController.handle);
productsRoutes.patch("/avatar/:product_id", verifyUserAuthorization(["admin"]), upload.single("avatar"), productsAvatarController.handle);
productsRoutes.get("/", showProductsController.handle);
productsRoutes.get("/:product_id", viewProductController.handle);




module.exports = productsRoutes;


