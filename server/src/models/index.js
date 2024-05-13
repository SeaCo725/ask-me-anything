// include all of your models here using CommonJS requires
const User = require("./User.js");
const Event = require("./Event.js")
const Host = require("./Host.js")
const Category = require("./Category.js")
const Question = require("./Question.js")

module.exports = { User, Event, Host, Category, Question };
