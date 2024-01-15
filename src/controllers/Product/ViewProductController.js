const ViewProductService = require("../../services/Product/ViewProductService");
const ProductsRepository = require("../../repositories/Products/ProductsRepository");


class ViewProductController {


 async handle(request, response){

  const {product_id} = request.params;


  const productsRepository = new ProductsRepository();
  const viewProductService = new ViewProductService(productsRepository);

  const product = await viewProductService.execute(product_id);

  response.json(
   product
  );

 }
}


module.exports = ViewProductController;