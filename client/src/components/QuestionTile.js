import React from "react"

const QuestionTile = (props) => {
  return (
    <div className="callout cell small-6 medium-4 large-3 grid-margin-x question-item">
      <p className="question">{props.question.user.username} asks: {props.question.question}</p>
    </div>
  )
}

export default QuestionTile