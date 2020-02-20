exports.up = function(knex, Promise) {
  return knex.schema.createTable('flags_users', tbl => {
    tbl.increments();
    tbl
      .integer('flag')
      .unsigned()
      .notNullable()
      .references('flags.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('user')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flags_users');
};
