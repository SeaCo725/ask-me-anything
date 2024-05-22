import React, { useState } from "react"
import ErrorList from "./layout/ErrorList"

const QuestionForm = props => {
  const [showLogInRequired, setShowLogInRequired] = useState(false)
  
  const clearForm = () => {
    props.setErrors({})
    props.setQuestionPayload({
      question: ""
    })
  }

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
    <div className="cell grid-container small-4">
      <form id="newQuestionForm" onSubmit={submitHandler}>
        <div>
          <label htmlFor="question">
            {showLogInRequired ? <p>You must be logged in to submit a question.</p> : null}
            <h3>Ask a question!</h3>
            <ErrorList errors={props.errors}/>
            <textarea 
              rows="3"
              cols="40"
              name="question" 
              id="question"
              onChange={onChangeHandler} 
              value={props.questionPayload.question}
            /> 
          </label>
        </div>
        <div className="buttons">
          <button className="button" type='submit'>Submit</button>
          <button onClick={clearForm} className="button" type='button'>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default QuestionForm