import express from 'express'
import Follow from '../../../models/Follow.js'
import cleanUserInput from '../../../Services/cleanUserInput.js'
import { ValidationError } from "objection"

const followRouter = new express.Router()

followRouter.get('/status', async (req, res) => {
  const data = req.query
  const cleanData = cleanUserInput(data)
  const { eventId, userId } = cleanData
  const follow = await Follow.query().where('userId', userId).andWhere('eventId', eventId).first()
  const isFollowing = !!follow
  res.status(200).json({ isFollowing })
})

followRouter.post('/', async (req, res) => {
  try {
    const cleanData = cleanUserInput(req.body)
    await Follow.query().insert(cleanData)
    res.status(201).json()
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error)
      res.status(422).json( {errors: error.data })
    } else {
      console.log(error)
      res.status(500).json( { error } )
    }
  }
})

export default followRouter