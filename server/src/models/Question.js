const Model = require("./Model.js")

class Question extends Model {
  static get tableName() {
    return "questions"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["question", "eventId", "userId"],
      properties: {
        question: { type: "string" },
        eventId: { type: "integer" },
        userId: { type: "integer" }
      }
    }
  }
}

module.exports = Question