const CreateOrderService = require("../../services/CreateOrder/CreateOrderService");
const OrdersRepository = require("../../repositories/Orders/OrdersRepository");


class CreateOrderController {
  async handle(request, response) {
    const { id: user_id } = request.user;
    const { sales } = request.body;


    const ordersRepository = new OrdersRepository();
    const createOrderService = new CreateOrderService(ordersRepository);


    const order_id = await createOrderService.execute({ user_id, sales });


    response.json({
      message: "Pedido criado com sucesso!",
      id: order_id
    })

  }
}


module.exports = CreateOrderController;