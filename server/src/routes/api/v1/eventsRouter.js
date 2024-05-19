import express from 'express'
import Event from "../../../models/Event.js"
import EventSerializer from '../../../Serializers/EventSerializer.js'
import cleanUserInput from '../../../Services/cleanUserInput.js'
import { ValidationError } from 'objection'

const eventsRouter = new express.Router()

eventsRouter.get("/", async (req, res) => {
  try{
    const events = await Event.query()
    const serializedEvents = await Promise.all(
      events.map(async (event) => EventSerializer.summaryForIndex(event)))
    res.status(200).json({ events: serializedEvents })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

eventsRouter.get("/:id", async (req, res) => {
  let eventId = req.params.id
  try {
    const event = await Event.query().findById(eventId)
    const serializedEvent = await EventSerializer.summaryForIndex(event)
    res.status(200).json({ event: serializedEvent })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error})
  }
})

eventsRouter.post("/", async (req, res) => {
  try {
    const formInput = cleanUserInput(req.body)
    const event = await Event.query().insertAndFetch(formInput)
    const serializedEvent = await EventSerializer.summaryForIndex(event)
    res.status(201).json({ event: serializedEvent })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json( { errors: error.data } )
    } else {
    console.log(error)
    res.status(500).json({ errors: error })
    }
  }
})

export default eventsRouter