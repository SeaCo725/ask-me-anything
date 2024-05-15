import React from "react"
import QuestionTile from "./QuestionTile"

const QuestionList = (props) => {
    
    const eventQuestions = props.questions.map(question => {
    return <QuestionTile key={question.id} question={question} />
  })
  
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