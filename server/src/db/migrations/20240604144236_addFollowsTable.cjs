/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("follows", (table) => {
    table.bigIncrements('id')
    table.bigInteger('eventId').notNullable().index().unsigned().references('events')
    table.bigInteger('userId').notNullable().index().unsigned().references('users')
    table.boolean('isHost').defaultTo(false).notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
		table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())

    table.unique(['eventId', 'userId'])
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('follows')
}
