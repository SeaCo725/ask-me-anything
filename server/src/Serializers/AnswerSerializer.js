import { Question } from "../models/index.js"

class AnswerSerializer {
  static async summaryForList(answer) {
    const allowedAttributes = ["id", "answer", "questionId", "eventId"]

    let serializedAnswer = {}
    for (const attribute of allowedAttributes) {
      serializedAnswer[attribute] = answer[attribute]
    }
    const question = await Question.query().findById(answer.questionId)
    serializedAnswer.question = question.question
    return serializedAnswer
  }
}

export default AnswerSerializer