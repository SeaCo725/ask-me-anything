const Model = require("./Model.js")

class Host extends Model {
  static get tableName() {
    return "hosts"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "categoryId"],
      properties: {
        userId: { type: "integer" },
        categoryId: { type: "integer" }
      }
    }
  }
}

module.exports = Host