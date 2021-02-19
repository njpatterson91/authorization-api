exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments().notNullable();
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.string("email").notNullable();
    })
    .createTable("products", (table) => {
      table.increments("id");
      table
        .integer("userID")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("productName").notNullable();
      table.string("productKey").notNullable();
      table.string("activeStatus").notNullable();
      table.string("expires").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products").dropTableIfExists("users");
};
