import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";
import { useParams } from "react-router-dom"
import translateServerErrors from "../services/translateServerErrors"
import AnswerList from "./AnswerList";
import Modal from 'react-modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const EventPage = (props) => {
  const [eligibleToStart, setEligibleToStart] = useState(false)
  const [errors, setErrors] = useState({})
  const [answers, setAnswers] = useState([])
  const [questions, setQuestions] = useState([])
  const [questionPayload, setQuestionPayload] = useState({
    question: ""
  })
  const [event, setEvent] = useState({
    id: "",
    description: "",
    startDate: "",
    categoryId: "",
    userId: "",
    isLive: false,
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
  const [isFollowing, setIsFollowing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
        <div className="center-text">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yikes!</h2>
          <button className="delete-circle" onClick={closeModal}>X</button>
          <p>Our profanity filter has detected one or more words that are not acceptable for submission.</p>
          <p>Please edit your input and resubmit.</p>
        </div>
      </Modal>
    </div>
  )

  const { id } = useParams()

  const getEvent = async () => {
    try {
      const response = await fetch(`/api/v1/events/${id}`)
      const responseBody = await response.json()
      setEvent(responseBody.event)
      setQuestions(responseBody.event.questions)
      const startDate = new Date(responseBody.event.startDate)
      if ( startDate < now) {
        setEligibleToStart(true)
      }
    } catch (error) {
      console.log(`Error in the fetch: ${error.message}`)
    }
  }

  const getFollowStatus = async () => {
    try {
      const response = await fetch(`/api/v1/follow/status?eventId=${event.id}&userId=${props.user.id}`)
      const result = await response.json()
      setIsFollowing(result.isFollowing)
    } catch (error) {
      console.error('Error fetching follow status:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getAnswers = async () => {
    try {
      const response = await fetch("/api/v1/answers")
      const responseBody = await response.json()
      setAnswers(responseBody.answers)
    } catch (error) {
      console.error(`Error in the fetch: ${ error.message }`)
    }
  }

  const addQuestion = async (questionPayload) => {
    try{
      const response = await fetch("/api/v1/questions", {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          ...questionPayload,
          eventId: id,
          userId: props.user.id,
        })
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
      setQuestions([
        ...questions,
        responseBody.question
      ])
      setQuestionPayload({
        question: ""
      })
      setErrors([])
    }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const toggleLive = async () => {
    try {
      const response = await fetch(`/api/v1/events/${id}`, {
        method: "PATCH",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ "isLive": !event.isLive })
      })
      if (!response.ok) {
        if (response.status === 422) {
          const errorBody = await response.json();
          const newErrors = translateServerErrors(errorBody.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const parsedResponse = await response.json()
        setEvent(parsedResponse.event)
        setQuestions(parsedResponse.event.questions)
      } 
    } catch(error) {
        console.error("Error in the edit request: ", error.message);
      }
  }

  useEffect(() => {
    getEvent()
  }, [])

  useEffect(() => {
    getAnswers()
  }, [])

  useEffect(() => {
    if (event.id) {
      getFollowStatus()
    }
  }, [event.id])

  const onOffToggle = () => {toggleLive()}

  let liveToggle = "fa-toggle-off"
  let toggleColor = "gray"
  if (event.isLive) {
    liveToggle = "fa-toggle-on"
    toggleColor = "green"
  }
  if (!event.isLive) {
    liveToggle = "fa-toggle-off"
    toggleColor = "gray"
  }

  const now = Date.now()
  const dateObject = new Date(event.startDate)
  const longDate = dateObject.toString()

  const handleFollow = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/v1/follow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId: event.id, userId: props.user.id, isHost: false }),
      });

      if (response.ok) {
        setIsFollowing(true);
      } else {
        console.error('Failed to follow');
      }
    } catch (error) {
      console.error('Error following:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="event">
      <div className="event-header">
        {eligibleToStart && props.user && props.user.id === event.host.id ? 
          <div className="toggle-container">
            <div className="live-toggle" onClick={onOffToggle}>
              <h6>Start Event</h6>
              <FontAwesomeIcon 
                icon={`fa-solid ${liveToggle}`} 
                color={toggleColor} 
                size="4x" 
              />
            </div>
          </div> : null }
        <div className="event-text">
          <h1>{event.description}</h1>
          <p>Event start time: {longDate}</p>
          <p>This event is hosted by - {event.host.username}</p>
          <p>This event is a Q&A in the {event.category.name} category.</p>
        </div>
        {props.user && event.id && !eligibleToStart && props.user.id !== event.host.id ?
          <button className="button" onClick={handleFollow} disabled={isFollowing || isLoading}>
            {isLoading ? 'Following...' : isFollowing ? 'Following' : 'Follow'}
          </button> : null }
      </div>
      {modalIsOpen ? profanityModal : null}
      <QuestionList 
        event={event} 
        setQuestions={setQuestions} 
        questions={questions}
        user={props.user}
        errors={errors}
        setErrors={setErrors}
        answers={answers}
        setAnswers={setAnswers}
      />
      <div className="answer-box" >
        <AnswerList event={event} answers={answers} setAnswers={setAnswers}/>
        {props.user ?
          <QuestionForm 
            setQuestionPayload={setQuestionPayload} 
            questionPayload={questionPayload}
            errors={errors} 
            setErrors={setErrors}
            user={props.user} 
            event={event} 
            addQuestion={addQuestion}
            openModal={openModal}
          /> : <p>Login to submit a question.</p> }
      </div>
    </div>
  )
}

export default EventPage