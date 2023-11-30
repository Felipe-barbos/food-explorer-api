const knex = require("../../database/knex");


class OrdersRepository {


  async createOrder({ user_id, sales }) {

    let totalAmount = 99;


    const [order_id] = await knex("orders").insert({
      total_amount: totalAmount,
      user_id
    });


    const salesInsert = sales.map(sale => {

      return {
        amount: sale.amount,
        product_id: sale.product_id,
        order_id
      }

    }

    );


    await knex("sales").insert(salesInsert);


    return order_id;

  }


  async showOrder(order_id) {

    const order = await knex("orders").where({ id: order_id }).first();

    const sales = await knex("sales").where({ order_id });

    return {
      ...order,
      sales
    };
  }
}


module.exports = OrdersRepository;