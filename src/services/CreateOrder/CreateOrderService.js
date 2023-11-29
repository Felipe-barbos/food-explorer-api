


class CreateOrderService {

  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository;
  }


  async execute({ user_id, sales }) {


    console.log(user_id, sales);
    const order_id = await this.ordersRepository.createOrder({ user_id, sales });


    return order_id;
  }


}

module.exports = CreateOrderService;