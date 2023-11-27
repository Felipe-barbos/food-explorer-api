const AppError = require("../../utils/AppError");


class ProductsCreateService {

  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ name, description, price }) {
    if (!name || !description || !price) {
      throw new AppError("Preencha todos os campos obrigatórios!");
    }

    const product_id = await this.productsRepository.createProduct({ name, description, price });

    return product_id;
  }
}


module.exports = ProductsCreateService;