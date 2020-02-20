exports.up = function(knex, Promise) {
  return knex.schema.createTable('directions', tbl => {
    tbl.increments();
    tbl
      .string('text')
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
  return knex.schema.dropTableIfExists('directions');
};
