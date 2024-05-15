import express from "express"
import { Question } from "../../../models/index.js"
import QuestionSerializer from "../../../Serializers/QuestionSerializer.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../../Services/cleanUserInput.js"

const questionsRouter = new express.Router()

questionsRouter.post("/", async (req, res) => {
  try {
    const formInput = cleanUserInput(req.body)
    const question = await Question.query().insertAndFetch(formInput)
    const serializedQuestion = await QuestionSerializer.summaryForShow(question)
    res.status(201).json({ question: serializedQuestion })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json( {errors: error.data })
    } else {
      console.log(error)
      res.status(500).json( { error } )
    }
  }
})

export default questionsRouter