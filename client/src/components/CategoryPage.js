import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import EventTile from "./EventTile";
import fetchEvents from "../services/fetchEvents";
import NewEventForm from "./NewEventForm";
import translateServerErrors from "../services/translateServerErrors";
import Modal from 'react-modal'
import LiveEvents from "./LiveEvents";
import UpcomingEvents from './UpcomingEvents'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app')

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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal =() => {
    setIsOpen(false);
  }

  const profanityModal = (
    <div>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Oops</h2>
      <button className="delete-circle" onClick={closeModal}>X</button>
      <p>Our profanity filter has detected one or more words that are not acceptable for submission.</p>
      <p>Please edit your input and resubmit.</p>
    </Modal>
  </div>
  )

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
    <div>
      <div className="category-header">
        <h1>Welcome to {category.name}!</h1>
        <h4>Description: {category.description}</h4>
      </div>
      {modalIsOpen ? profanityModal : null}
      <LiveEvents events={categoryEvents}/>
      <UpcomingEvents events={categoryEvents} />
      {props.user ?
      <div className="form-container">
        <NewEventForm
          errors={errors} 
          setErrors={setErrors}
          category={category} 
          user={props.user} 
          addEvent={addEvent}
          newEventData={newEventData}
          setNewEventData={setNewEventData}
          openModal={openModal}
        />
      </div> : <p>Login to create an event.</p>}
    </div>
  )
}

export default CategoryPage