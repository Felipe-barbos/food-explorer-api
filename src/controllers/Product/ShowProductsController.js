const ProductsRepository = require("../../repositories/Products/ProductsRepository");
const ShowProductsService = require("../../services/Product/ShowProductsService");




class ShowProductsController {



  async handle(request, response) {
    const productsRepository = new ProductsRepository();
    const showProductsService = new ShowProductsService(productsRepository);

    const products = await showProductsService.execute();


    response.json(
      products
    );
  }
}


module.exports = ShowProductsController;