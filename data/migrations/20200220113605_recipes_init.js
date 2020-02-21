exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl
      .string('name', 63)
      .notNullable()
      .unique();
    tbl
      .integer('owner')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .string('description', 1023)
    tbl
      .integer('parent_folder')
      .unsigned()
      .references('folders.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .boolean('private')
      .defaultTo(true)
    tbl.string('image')
    tbl
      .timestamps()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
