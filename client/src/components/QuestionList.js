import React, { useState, useEffect } from "react"
import QuestionTile from "./QuestionTile"

const QuestionList = (props) => {
  const eventId = props.event.id
  
  const getQuestions = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      const parsedResponse = await response.json()
      const eventQuestions = parsedResponse.questions.filter(question => question.eventId == eventId)
      props.setQuestions(eventQuestions)
    } catch (error) {
      console.log(`Error in question fetch: ${error.message}`)
    }
  }
  const eventQuestions = props.questions.map(question => {
    return <QuestionTile key={question.id} question={question} />
  })

  useEffect(() => {
    getQuestions()
  }, [eventId])
  
  return (
    <div className="question-container">
      <h3>Event Questions:</h3>
      <div className="evnt_questions grid-x">
        {eventQuestions}
      </div>
    </div>
  )
}

export default QuestionList