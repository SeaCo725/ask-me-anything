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
        <h5>{props.event.description}</h5>
        <h6 className="inline-element">Hosted by: {props.event.host.username}</h6>
        <p>{dateString} {standardTime}</p>
      </Link>
    </div>
  )
}

export default EventTile