/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("events", (table) => {
    table.bigIncrements("id")
    table.string("description")
    table.datetime("startDate").notNullable()
    table.bigInteger("categoryId").index().unsigned().notNullable().references("categories")
    table.bigInteger("userId").index().unsigned().notNullable().references("users")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
		table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("events")
}
