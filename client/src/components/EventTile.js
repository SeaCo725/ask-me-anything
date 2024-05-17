import React from "react"
import getStandardTime from "../services/getStandardTime"
import { Link } from 'react-router-dom'

const EventTile = (props) => {

  const dateTime = new Date(props.event.startDate)
  const dateString = dateTime.toDateString()
  const standardTime = getStandardTime(dateTime)

  return (
    <div className="cell small-6 medium-4 large-auto event-tile">
      <Link to={`/events/${props.event.id}`}>
        <p className="bold">Start Time:</p>
        <h6>{dateString}</h6>
        <h6>{standardTime}</h6>
        <div className="inline-container">
          <p className="bold inline-element">Host: </p>
          <h5 className="inline-element">{props.event.host.username}</h5>
        </div>
        <p className="bold">Category: </p>
        <h5>{props.event.category.name}</h5>
      </Link>
    </div>
  )
}

export default EventTile