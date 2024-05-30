import React from 'react'
import AnswerTile from './AnswerTile'

const AnswerList = (props) => {

  const eventAnswers = props.answers.filter(answer => answer.eventId == props.event.id)

  const answerList = eventAnswers.map(answer => {
    return (
      <AnswerTile key={answer.id} answer={answer} question={answer.question} />
    )
  })

  return (
    <div className="answer-list-container">
      <h3>Answered Questions:</h3>
      <div className="callout grid-x">
        {answerList}
      </div>
    </div>
  )
}

export default AnswerList