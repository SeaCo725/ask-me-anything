import express from 'express'
import Event from "../../../models/Event.js"
import EventSerializer from '../../../Serializers/EventSerializer.js'

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

export default eventsRouter