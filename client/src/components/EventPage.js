import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";
import { useParams } from "react-router-dom"
import translateServerErrors from "../services/translateServerErrors"
import AnswerList from "./AnswerList";
import Modal from 'react-modal'

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

  const { id } = useParams()

  const getEvent = async () => {
    try {
      const response = await fetch(`/api/v1/events/${id}`)
      const responseBody = await response.json()
      setEvent(responseBody.event)
      setQuestions(responseBody.event.questions)
    } catch (error) {
      console.log(`Error in the fetch: ${error.message}`)
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

  useEffect(() => {
    getEvent()
    getAnswers()
  }, [])

  const dateObject = new Date(event.startDate)
  const longDate = dateObject.toString()
  return (
    <div className="evnt">
      <div className="evnt-text">
        <h1>Welcome to the Event!</h1>
        <p>Event start time: {longDate}</p>
        <p>This event is hosted by - {event.host.username}</p>
        <p>This event is a Q&A in the {event.category.name} category.</p>
        <p>Event Details (provided by Host): {event.description}</p>
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
      <div className="grid-x grid-margin-x answer-box" >
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