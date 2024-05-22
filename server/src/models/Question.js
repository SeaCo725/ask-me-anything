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
    const { Event, Answer } = require("./index.js")
    return {
      events: {
        relation: Model.BelongsToOneRelation,
        modelClass: Event,
        join: {
          from: "questions.eventId",
          to: "events.id"
        }
      },
      answers: {
        relation: Model.HasManyRelation,
        modelClass: Answer,
        join: {
          from: "questions.id",
          to: "answers.questionId"
        }
      }
    }
  }
}

module.exports = Question