import React, { useState, useEffect } from 'react'
import CategoriesBar from './CategoriesBar.js'
import UpcomingEvents from './UpcomingEvents.js'
import fetchEvents from '../services/fetchEvents.js'
import LiveEvents from './LiveEvents.js'

const Index = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const newEvents = await fetchEvents()
      setEvents(newEvents)
    }
    getEvents()
  }, [])

  return (
    <div>
      <CategoriesBar events={events}/>
      <h1>𝔸𝕤𝕜 𝕄𝕖 𝔸𝕟𝕪𝕥𝕙𝕚𝕟𝕘</h1>
      <LiveEvents events={events} />
      <UpcomingEvents events={events}/>
    </div>

  )
}

export default Index