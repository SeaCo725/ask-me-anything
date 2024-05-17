import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import EventTile from "./EventTile";
import fetchEvents from "../services/fetchEvents";

const CategoryPage = (props) => {
  const [category, setCategory] = useState({
    events: []
  })
  const [events, setEvents] = useState([])
  const {categoryName} = useParams()

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryName}`)
      const responseBody = await response.json()
      setCategory(responseBody.category)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    const getEvents = async () => {
      const newEvents = await fetchEvents()
      setEvents(newEvents)
    }
    getEvents()
  }, [])

  const categoryEvents = events.filter(event => event.categoryId === category.id)

  let now = Date.now()
  const eventList = categoryEvents.map(event => {
    event.startDate = new Date(event.startDate)
    if (event.startDate > now) {
      return <EventTile key={event.id} event={event} />
    }
  })

  eventList.sort((a,b ) => a.props.event.startDate - b.props.event.startDate)

  useState(() => {
    getCategory()
  }, [])

  return (
    <>
      <div>
        <h1>Welcome to {category.name}!</h1>
        <h4>Description: {category.description}</h4>
      </div>
      <div className="upcoming-events-container">
        <h3>Upcoming Events:</h3>
        <div className="grid-x grid-padding-y grid-container small-12 grid-margin-x grid-margin-y upcoming-events-list">
          {eventList}
        </div>
    
      </div>
    </>
  )
}

export default CategoryPage