import React from "react"
import EventTile from "./EventTile.js"

const UpcomingEvents = (props) => {

  let now = Date.now()
  const eventList = props.events.map(event => {
    event.startDate = new Date(event.startDate)
    if (event.startDate > now) {
      return <EventTile key={event.id} event={event} />
    }
  })

  eventList.sort((a,b ) => a.props.event.startDate - b.props.event.startDate)

  return (
    <div className="event-list">
      <h3>Upcoming Events:</h3>
      <div className="grid-x grid-padding-y small-12 grid-margin-x grid-margin-y upcoming-events-list">
        {eventList}
      </div>

    </div>
  )
}

export default UpcomingEvents