exports.up = function(knex, Promise) {
  return knex.schema.createTable('flags', tbl => {
    tbl.increments();
    tbl
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flags');
};
