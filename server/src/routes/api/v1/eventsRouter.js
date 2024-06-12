import express from 'express'
import EventSerializer from '../../../Serializers/EventSerializer.js'
import cleanUserInput from '../../../Services/cleanUserInput.js'
import { ValidationError } from 'objection'
import Follow from '../../../models/Follow.js'
import { Event, User } from "../../../models/index.js"


const eventsRouter = new express.Router()

eventsRouter.get("/", async (req, res) => {
  try{
    const events = await Event.query()
    const serializedEvents = await Promise.all(
      events.map(async (event) => EventSerializer.summaryForIndex(event)))
    res.status(200).json({ events: serializedEvents })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

eventsRouter.get("/followed", async (req, res) => {
  try{
    const userId = req.user.id
    const userRecord  = await User.query().findById(userId).first()
    const followedEvents = await userRecord.$relatedQuery('events')
    const serializedEvents = await EventSerializer.summaryForFollowed(followedEvents)
    res.status(200).json({ events: serializedEvents })
  } catch (error) {
    console.log(error)
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
    const { body, user } = req
    const cleanBody = cleanUserInput(body)
    const cleanUser = cleanUserInput(user)
    const event = await Event.query().insertAndFetch(cleanBody)
    const cleanEvent = cleanUserInput(event)
    await Follow.query().insert({userId: cleanUser.id, eventId: cleanEvent.id, isHost: true })
    const serializedEvent = await EventSerializer.summaryForIndex(event, user)
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

eventsRouter.patch("/:id", async (req, res) => {
  let eventId = req.params.id
  try {
    const updatedEvent = await Event.query().patchAndFetchById(eventId, req.body)
    const serializedEvent = await EventSerializer.summaryForIndex(updatedEvent)
    res.status(200).json({ event: serializedEvent })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error})
  }
})

export default eventsRouter