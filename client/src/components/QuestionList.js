import React from "react"
import QuestionTile from "./QuestionTile"

const QuestionList = (props) => {

  const eventQuestions = props.questions.map(question => {
    return (
      <QuestionTile 
        key={question.id} 
        questions={props.questions} 
        setQuestions={props.setQuestions}
        event={props.event}
        question={question} 
        user={props.user}
        errors={props.errors}
        setErrors={props.setErrors}
        answers={props.answers}
        setAnswers={props.setAnswers}
      />
    )
  })
  
  return (
    <div className="question-container">
      <h3>Event Questions:</h3>
      <div className="grid-x">
        {eventQuestions}
      </div>
    </div>
  )
}

export default QuestionList