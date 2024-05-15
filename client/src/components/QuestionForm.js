import React, { useState } from "react"
import ErrorList from "./layout/ErrorList"

const QuestionForm = props => {
  const [showLogInRequired, setShowLogInRequired] = useState(false)
  
  const onChangeHandler = event => {
    props.setQuestionPayload({
      ...props.questionPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    if (props.user) {
      props.addQuestion(props.questionPayload)
    } else setShowLogInRequired(true)
  }

  return (
    <>
      <form className="form grid-container" onSubmit={submitHandler}>
        <label htmlFor="question">
          {showLogInRequired ? <p>You must be logged in to submit a question.</p> : null}
          <h3>Ask a question!</h3>
          <ErrorList errors={props.errors}/>
          <textarea 
            rows="3"
            cols="40"
            name="question" 
            onChange={onChangeHandler} 
            value={props.questionPayload.question}
          /> 
        </label>
        <input className="button" type='submit' value='Submit' />
      </form>
    </>
  )
}

export default QuestionForm