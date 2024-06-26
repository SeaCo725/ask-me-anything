/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "username"],

      properties: {
        email: { type: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        username: { type: "string", minLength: 3, maxLength: 25 },
        cryptedPassword: { type: "string" },
        image: { type: "string" }
      },
    };
  }

  static get relationMappings() {
    const { Event, Follow } = require("./index.js")
    return {
      events: {
        relation: Model.ManyToManyRelation,
        modelClass: Event,
        join: {
          from: "users.id",
          through: {
            from: "follows.userId",
            to: "follows.eventId"
          },
          to: "events.id"
        }
      },
      follows: {
        relation: Model.HasManyRelation,
        modelClass: Follow,
        join: {
          from: "user.id",
          to: "follows.userId"
        }
      }
    }
  }

  $beforeInsert() {
    return this.$checkUniqueness("email");
  }

  $beforeUpdate() {
    return this.$checkUniqueness("email");
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
