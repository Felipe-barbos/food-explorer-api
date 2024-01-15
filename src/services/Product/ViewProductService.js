


class ViewProductService{

 constructor(productsRepository){
  this.productsRepository = productsRepository;
 }
 
 async execute(product_id){
  const product = await this.productsRepository.showProduct(product_id);


  return product;
 }
}



module.exports = ViewProductService;