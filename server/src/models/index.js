// include all of your models here using CommonJS requires
const User = require("./User.js");
const Event = require("./Event.js")
const Category = require("./Category.js")
const Question = require("./Question.js")
const Answer = require("./Answer.js")

module.exports = { User, Event, Category, Question, Answer };
