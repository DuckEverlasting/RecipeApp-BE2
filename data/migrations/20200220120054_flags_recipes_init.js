exports.up = function(knex, Promise) {
  return knex.schema.createTable('flags_recipes', tbl => {
    tbl.increments();
    tbl
      .integer('flag')
      .unsigned()
      .notNullable()
      .references('flags.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
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
  return knex.schema.dropTableIfExists('flags_recipes');
};
