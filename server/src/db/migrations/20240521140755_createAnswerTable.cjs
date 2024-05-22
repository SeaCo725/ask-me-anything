/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("answers", (table) => {
    table.bigIncrements('id')
    table.text("answer").notNullable()
    table.bigInteger("eventId").notNullable().unsigned().index().references('events')
    table.bigInteger("questionId").notNullable().unsigned().index().references("questions")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
		table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("answers")
}
