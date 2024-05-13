/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("hosts", (table) => {
    table.bigIncrements("id")
    table.bigInteger("userId").index().unsigned().notNullable().references("users")
    table.bigInteger("categoryId").index().unsigned().notNullable().references("categories")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
		table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("hosts")
}
