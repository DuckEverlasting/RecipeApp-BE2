const knex = require('../knexConfig');

exports.insert = (table, object, returnFields=[]) => {
  return knex(table)
    .returning('id')
    .insert(object)
    .then(res => {
      [id] = res.id
      return knex(table)
        .where('id', id)
        .select(...returnFields)
        .first();
    });
};

exports.get = (table, fields=[]) => {
  return knex(table)
    .select([...fields])
};

exports.getBy = (table, parameters, fields=[]) => {
  return knex(table)
    .where(parameters)
    .select([...fields]);
};

exports.getById = (table, id, fields=[]) => {
  return knex(table)
    .where('id', id)
    .select([...fields])
    .first();
};

exports.updateById = (table, id, object, returnFields=[]) => {
  return knex(table)
    .update(object)
    .where('id', id)
    .then(res => {
      if (res > 0) {
        return knex(table)
        .where('id', id)
        .select(...returnFields)
        .first();
      } else {
        return null;
      };
    });
};

exports.deleteById = (table, id) => {
  return knex(table)
    .del()
    .where('id', id);
};
