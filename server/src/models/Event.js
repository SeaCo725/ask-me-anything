const Model = require("./Model.js")

class Event extends Model {
  static get tableName() {
    return "events"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["description", "startDate", "categoryId", "subcategoryId"],
      properties: {
        description: { type: "string" },
        startDate: { type: "string", format: "date-time"},
        categoryId: { type: "integer" },
        subcategoryId: { type: "integer" },
        isLive: { type: "boolean" }
      }
    }
  }
  static get relationMappings() {
    const { Category, User, Question, Follow } = require("./index.js")
    return {
      categories: {
        modelClass: Category,
        relation: Model.BelongsToOneRelation,
        join: {
          from: "events.subcategoryId",
          to: "categories.id"
        }
      },
      follows: {
        modelClass: Follow,
        relation: Model.HasManyRelation,
        join: {
          from: "events.id",
          to: "follows.eventId"
        }
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "events.id",
          through: {
            from: "follows.eventId",
            to: "follows.userId"
          },
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