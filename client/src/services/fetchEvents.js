
const fetchEvents = async () => {
  try{
    const response = await fetch("/api/v1/events")
    const events = await response.json()
    return events.events
  } catch (error) {
    console.log(`Error in fetch: ${error.message}`)
  }
}

export default fetchEvents;