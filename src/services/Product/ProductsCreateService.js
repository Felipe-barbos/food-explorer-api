const AppError = require("../../utils/AppError");


class ProductsCreateService {

  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ name, description,type, price }) {
    if (!name || !description || !price || !type) {
      throw new AppError("Preencha todos os campos obrigatórios!");
    }

    const product_id = await this.productsRepository.createProduct({ name, description, type,price });

    return product_id;
  }
}


module.exports = ProductsCreateService;