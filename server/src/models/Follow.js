const Model = require("./Model.js")

class Follow extends Model {
  static get tableName() {
    return 'follows'
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "eventId", "isHost"],
      properties: {
        userId: { type: "integer" },
        eventId: { type: "integer" },
        isHost: { type: "boolean" }
      }
    }
  }

  static get relationMappings() {
    const { User, Event } = require("./index.js")
    return {
      users: {
        modelClass: User,
        relation: Model.BelongsToOneRelation,
        join: {
          from: "follows.userId",
          to: "users.id"
        }
      },
      events: {
        modelClass: Event,
        relation: Model.BelongsToOneRelation,
        join: {
          from: "follows.eventId",
          to: "events.id"
        }
      }
    }
  }
}

module.exports = Follow