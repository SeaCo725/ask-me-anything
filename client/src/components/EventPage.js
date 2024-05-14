import React, { useState, useEffect } from "react";

const EventPage = (props) => {
  const [event, setEvent] = useState({
    id: "",
    description: "",
    startDate: "",
    categoryId: "",
    userId: "",
    category: {
      createdAt: "",
      description: "",
      id: "",
      name: "",
      updatedAt: ""
    },
    host: {
      createdAt: "",
      email: "",
      id: "",
      image: "",
      updatedAt: "",
      username: ""
    }
  })

  let id = props.match.params.id

  const getEvent = async () => {
    try {
      const response = await fetch(`/api/v1/events/${id}`)
      const responseBody = await response.json()
      setEvent(responseBody.event)
    } catch (error) {
      console.log(`Error in the fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  const dateObject = new Date(event.startDate)
  const longDate = dateObject.toString()

  return (
    <div>
      <h1>Welcome to the Event!</h1>
      <p>Event start time: {longDate}</p>
      <p>This event is hosted by - {event.host.username}</p>
      <p>This event is a Q&A in the {event.category.name} category.</p>
      <p>Event Details provided by Host: {event.description}</p>
    </div>
  )
}

export default EventPage