const Model = require("./Model.js")

class Event extends Model {
  static get tableName() {
    return "events"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["startDate", "categoryId", "hostId"],
      properties: {
        description: { type: "string" },
        startDate: { type: "string", format: "date-time"},
        categoryId: { type: "integer" },
        hostId: { type: "integer" }
      }
    }
  }
}

module.exports = Event