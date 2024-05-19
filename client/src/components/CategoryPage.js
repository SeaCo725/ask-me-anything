import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import EventTile from "./EventTile";
import fetchEvents from "../services/fetchEvents";
import NewEventForm from "./NewEventForm";
import translateServerErrors from "../services/translateServerErrors";
import ErrorList from "./layout/ErrorList";

const CategoryPage = (props) => {
  const [category, setCategory] = useState({
    events: []
  })
  const [newEventData, setNewEventData] = useState({
    date: "",
    time: "",
    description: "",
    userId: "",
    categoryId: ""
  })
  const [events, setEvents] = useState([])
  const [errors, setErrors] = useState({})
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

  const addEvent = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/events", {
        method: 'POST',
        headers: new Headers ({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const errorBody = await response.json()
          const newErrors = translateServerErrors(errorBody.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
    } else {
      const responseBody = await response.json()
      setEvents([...events, responseBody.event])
      setNewEventData({
        date: "",
        time: "",
        description: "",
        userId: "",
        categoryId: ""
      })
      setErrors({})
    }
    } catch (error) {
      console.error(`Error in the fetch:${ error.message }`)
    }
  }

  useEffect(() => {
    const getEvents = async () => {
      const newEvents = await fetchEvents()
      setEvents(newEvents)
    }
    getEvents()
    getCategory()
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

  return (
    <>
      <div>
        <h1>Welcome to {category.name}!</h1>
        <h4>Description: {category.description}</h4>
      </div>
      <div className="upcoming-events-container">
        <h3>Upcoming Events:</h3>
        <div 
          className="grid-x grid-padding-y grid-container small-12 grid-margin-x 
          grid-margin-y upcoming-events-list"
        >
          {eventList}
        </div>
      </div>
      {props.user ?
      <div className="form">
        <h3>Create Event:</h3>
        <ErrorList errors={errors}/>
        <NewEventForm 
          setErrors={setErrors}
          category={category} 
          user={props.user} 
          addEvent={addEvent}
          newEventData={newEventData}
          setNewEventData={setNewEventData}
        />
      </div> : <p>Login to create an event.</p>}
    </>
  )
}

export default CategoryPage