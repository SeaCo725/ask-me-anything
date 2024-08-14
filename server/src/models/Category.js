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
      required: ["name", "parent_id"],
      properties: {
        parent_id: { type: "integer" },
        name: { type: "string", minLength: 2, maxLength: 100 },
        description: { type: "string", maxLength: 2500 }
      }
    }
  }

  static get relationMappings() {
    const { Event } = require("./index.js")
    return {
      events: {
        modelClass: Event,
        relation: Model.HasManyRelation,
        join: {
          from: "categories.id",
          to: "events.categoryId"
        }
      }
    }
  }
}

module.exports = Category