const Model = require("./Model.js")
const uniqueFactory = require("objection-unique")

const unique = uniqueFactory({
  fields: ["category"],
  identifiers: ["id"]
})

class Category extends unique(Model) {
  static get tableName() {
    return "categories"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["category"],
      properties: {
        category: { type: "string", minLength: 2, maxLength: 100 },
        description: { type: "string" }
      }
    }
  }
}

module.exports = Category