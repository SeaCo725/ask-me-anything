const Model = require("./Model.js")

class Answer extends Model {
  static get tableName() {
    return "answers"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["answer", "eventId"],
      properties: {
        answer: { type: "string", minLength:2, maxLength: 1000 },
        questionId: { type: "integer" },
        eventId: { type: "integer" }
      }
    }
  }

  static get relationMappings() {
    const { Question } = require('./index.js')
    return {
      questions: {
        relation: Model.BelongsToOneRelation,
        modelClass: Question,
        join: {
          from: "answers.questionId",
          to: "questions.id"
        }
      }
    }
  }
}

module.exports = Answer