import express from "express"
import { Answer } from "../../../models/index.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../../Services/cleanUserInput.js"
import AnswerSerializer from "../../../Serializers/AnswerSerializer.js"

const answersRouter = new express.Router()

answersRouter.get("/", async (req, res) => {
  try {
    const answers = await Answer.query()
    const serializedAnswers = await Promise.all(answers.map(async (answer) => {
      return await AnswerSerializer.summaryForList(answer)
    }))
    res.status(200).json({ answers: serializedAnswers})
  } catch (error) {
    res.status(500).json({})
  }
})

answersRouter.post("/", async (req, res) => {
  try {
    const { body } = req
    const submitted = cleanUserInput(body)
    const answer = await Answer.query().insertAndFetch(submitted)
    const serializedAnswer = await AnswerSerializer.summaryForList(answer)
    res.status(201).json({ answer: serializedAnswer })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json( { errors: error.data } )
    } else {
    console.log(error)
    res.status(500).json({ errors: error })
    }
  }
})

export default answersRouter
