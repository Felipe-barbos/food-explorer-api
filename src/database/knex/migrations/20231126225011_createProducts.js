exports.up = knex => knex.schema.createTable("products", table => {

  table.increments("id");
  table.text("name").notNullable();
  table.text("description");
  table.text("avatar");
  table.double("price");
  table.boolean("isActive").default(false);

  table.enum("type", ["dish", "drink", "meal"], {userNative:true, enumName:"types"})
  .notNullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable("products");