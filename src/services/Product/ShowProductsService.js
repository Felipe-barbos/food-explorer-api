


class ShowProductsService {


  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute() {
    const products = await this.productsRepository.getProducts();


    return products;
  }
}



module.exports = ShowProductsService;