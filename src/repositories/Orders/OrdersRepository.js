const knex = require("../../database/knex");
const searchProducts = require("./SearchProducts");




class OrdersRepository {




  async createOrder({ user_id, sales }) {

    let totalAmount = 0;


    for (var i = 0; i < sales.length; i++) {
      const product = await searchProducts(sales[i].product_id);
      totalAmount += product.price * sales[i].amount;
    }



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



    for (var i = 0; i < sales.length; i++) {
      const product = await searchProducts(sales[i].product_id);
      Object.assign(sales[i], product);
    }

    return {
      ...order,
      sales
    };




  }


  async showIndex(user_id) {
    const index = await knex("orders").where({ user_id });


    return index;
  }








}


module.exports = OrdersRepository;