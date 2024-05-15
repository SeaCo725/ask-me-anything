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

  static get relationMappings() {
    const { Event } = require("./index.js")
    return {
      events: {
        relation: Model.BelongsToOneRelation,
        modelClass: Event,
        join: {
          from: "questions.eventId",
          to: "events.id"
        }
      }
    }
  }
}

module.exports = Question