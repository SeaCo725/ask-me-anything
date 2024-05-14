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
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 2, maxLength: 100 },
        description: { type: "string" }
      }
    }
  }

  static get relationMapping() {
    const { Event } = require("./index.js")
    return {
      events: {
        relation: Model.HasManyRelation,
        modelClass: Event,
        join: {
          from: "categories.id",
          to: "events.categoriesId"
        }
      }
    }
  }
}

module.exports = Category