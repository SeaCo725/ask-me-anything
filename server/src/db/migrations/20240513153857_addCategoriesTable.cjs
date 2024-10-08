/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("categories", (table) => {
    table.bigIncrements("id")
    table.bigInteger("parent_id").notNullable().unsigned().defaultTo(0)
    table.string("name").notNullable().unique()
    table.text("description")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
		table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("categories")
}
