exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username', 63)
      .notNullable()
      .unique();
    tbl
      .timestamps()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
