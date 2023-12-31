


exports.up = knex => knex.schema.createTable("orders", table => {

  table.increments("id");
  table.enum("statu", ["andamento", "aprovado", "encerrado"], { orderNative: true, enumName: "status" })
    .notNullable().defaultTo("andamento");

  table.double("total_amount");
  table.integer("user_id").references("id").inTable("users");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("orders");