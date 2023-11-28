
exports.up = knex => knex.schema.createTable("sales", table => {

  table.increments("id");
  table.integer("amount").notNullable();
  table.integer("product_id").references("id").inTable("products");
  table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE");

});

exports.down = knex => knex.schema.dropTable("sales");