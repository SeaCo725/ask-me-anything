import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";
import { useParams } from "react-router-dom"
import translateServerErrors from "../services/translateServerErrors"

const EventPage = (props) => {
  const [errors, setErrors] = useState({})
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
  }, [])

  const dateObject = new Date(event.startDate)
  const longDate = dateObject.toString()
  return (
    <div className="evnt">
      <h1>Welcome to the Event!</h1>
      <p>Event start time: {longDate}</p>
      <p>This event is hosted by - {event.host.username}</p>
      <p>This event is a Q&A in the {event.category.name} category.</p>
      <p>Event Details (provided by Host): {event.description}</p>
      <QuestionList event={event} setQuestions={setQuestions} questions={questions}/>
        <QuestionForm 
          setQuestionPayload={setQuestionPayload} 
          questionPayload={questionPayload}
          errors={errors} 
          user={props.user} 
          event={event} 
          addQuestion={addQuestion}
        />
    </div>
  )
}

export default EventPage