exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    tbl.increments();
    tbl
      .string('text', 255)
      .notNullable();
    tbl
      .integer('recipe')
      .unsigned()
      .notNullable()
      .references('recipes.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
