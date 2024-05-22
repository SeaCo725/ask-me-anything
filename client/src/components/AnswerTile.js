import React from 'react'

const AnswerTile = (props) => {

  return (
    <div className='cell'>
      <p>Question: {props.question}</p>
      <p>Answer: {props.answer.answer}</p>
    </div>
  )
}

export default AnswerTile