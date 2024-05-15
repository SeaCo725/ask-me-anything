import { User } from "../models/index.js"

class QuestionSerializer {
  static summaryForList = async (questions) => {
    const allowedQuestionFields = ["id", "question", "eventId", "userId"]
    const serializedQuestions = Promise.all(questions.map(async question => {
      const serializedQuestion = {}
      allowedQuestionFields.forEach( async field => {
        serializedQuestion[field] = question[field]
      })
    serializedQuestion.user = await User.query().findById(question.userId)
    return serializedQuestion
    }))
  return serializedQuestions
  }

  static summaryForShow = async (question) => {
    const allowedQuestionFields = ["id", "question", "eventId", "userId"]
    const serializedQuestion = {}
    allowedQuestionFields.forEach(field => {
      serializedQuestion[field] = question[field]
    })
    serializedQuestion.user = await User.query().findById(question.userId)
    return serializedQuestion
  }
}

export default QuestionSerializer