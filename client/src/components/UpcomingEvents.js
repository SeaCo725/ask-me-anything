import React, {useState} from "react"
import EventTile from "./EventTile.js"

const UpcomingEvents = (props) => {
  const initialItemCount = 10
  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount)

  const showMoreItems = () => {
    setVisibleItemCount(prevCount => Math.min(prevCount + initialItemCount, eventList.length))
  }

  const showLessItems = () => {
    setVisibleItemCount(prevCount => Math.max(prevCount - initialItemCount, initialItemCount ))
  }

  let now = Date.now()

  const eventList = props.events.map(event => {
    event.startDate = new Date(event.startDate)
    if (event.startDate > now) {
      return <EventTile key={event.id} event={event} />
    }
  })

  eventList.sort((a,b ) => a.props.event.startDate - b.props.event.startDate)
  const upcomingEvents = eventList.slice(0,visibleItemCount)

  return (
    <div className="event-list">
      <h3>Upcoming Events:</h3>
      <div className="grid-x grid-padding-y small-12 grid-margin-x grid-margin-y upcoming-events-list">
          {upcomingEvents}
      </div>
      <div className="More-or-Less">
        {visibleItemCount < eventList.length && (
          <button onClick={showMoreItems} className="more-button">
            Show More
          </button>
        )}
        {visibleItemCount > initialItemCount && (
          <button onClick={showLessItems} className="less-button" >
            Show Less
          </button>
        )}
      </div>
    </div>
  )
}

export default UpcomingEvents