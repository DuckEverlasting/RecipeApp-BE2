exports.up = function(knex, Promise) {
  return knex.schema.createTable('flags', tbl => {
    tbl.increments();
    tbl
      .string('text', 31)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flags');
};
