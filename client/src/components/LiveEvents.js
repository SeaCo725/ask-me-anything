import React from "react"
import EventTile from "./EventTile.js"

const LiveEvents = (props) => {

  const currentTime = new Date
  const currentHours = currentTime.getHours() - 3
  const now = new Date
  const cutoff = currentTime.setHours(currentHours)
  const cutoffTime = new Date(cutoff)
  
  const eventList = props.events.map(event => {
    const startDate = new Date(event.startDate)
    if (now > startDate && startDate > cutoffTime) {
        return <EventTile key={event.id} event={event} />
    }
  })

  eventList.sort((a,b ) => a.props.event.startDate - b.props.event.startDate)

  return (
    <div className="live-events-container">
      <h3>Events Currently Live:</h3>
      <div className="grid-x grid-padding-y grid-container small-12 grid-margin-x grid-margin-y upcoming-events-list">
        {eventList}
      </div>

    </div>
  )
}

export default LiveEvents