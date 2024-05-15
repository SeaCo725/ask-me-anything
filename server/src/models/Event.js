const Model = require("./Model.js")

class Event extends Model {
  static get tableName() {
    return "events"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["startDate", "categoryId", "userId"],
      properties: {
        description: { type: "string" },
        startDate: { type: "string", format: "date-time"},
        categoryId: { type: "integer" },
        userId: { type: "integer"}
      }
    }
  }
  static get relationMappings() {
    const { Category, User, Question } = require("./index.js")
    return {
      categories: {
        modelClass: Category,
        relation: Model.BelongsToOneRelation,
        join: {
          from: "events.categoryId",
          to: "categories.id"
        }
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "events.userId",
          to: "users.id"
        }
      },
      questions: {
        relation: Model.HasManyRelation,
        modelClass: Question,
        join: {
          from: "events.id",
          to: "questions.eventId"
        }
      }
    }
  }
}

module.exports = Event