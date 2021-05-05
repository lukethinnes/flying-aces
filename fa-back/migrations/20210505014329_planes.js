
exports.up = knex => knex.schema.createTable('planes', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
})

exports.down = knex => knex.schema.drop('planes')