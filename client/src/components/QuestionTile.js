import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"
import ErrorList2 from "./layout/ErrorList2"

const QuestionTile = (props) => {
  const [answerInput, setAnswerInput] = useState({
    answer: "",
    questionId: "",
    eventId: ""
  })

  const [showAnswerForm, setShowAnswerForm] = useState(false)
  const [error, setErrors ] = useState({})
  
  const deleteQuestion = async () => {
    try {
      const response = await fetch(`/api/v1/questions/${props.question.id}`,
      { method: "DELETE" }
      )
      if (response.ok) {
        const remainingQuestions = props.questions.filter((question) => {
          return question.id != props.question.id
        })
        props.setQuestions(remainingQuestions)
        const remainingAnswers = props.answers.filter((answer) => {
          return answer.questionId != props.question.id
        })
        props.setAnswers(remainingAnswers)
      }
    } catch (error) {
      console.error(`Error in the Fetch: ${ error.message }`)
    }
  }

  const clearForm = () => {
    setErrors({})
    setAnswerInput({
      answer: "",
      questionId: ""
    })
  } 

  const toggleAnswerForm = () => {
    setShowAnswerForm(!showAnswerForm)
    clearForm()
  }

  const deleteClick = () => {
    deleteQuestion()
  }

  let deleteButton = null
  let answer = null
  if (props.user && props.event.host.id == props.user.id) {
    deleteButton = (
      <p className="delete-circle" onClick={deleteClick}>X</p>
    );
    answer = <p className="answer-toggle" onClick={toggleAnswerForm}>Answer</p>
  } 

  const onChange = (event) => {
    setAnswerInput({
      ...answerInput,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const postAnswer = async (answerPayload) => {
    try{
      const response = await fetch("/api/v1/answers", {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          ...answerPayload,
          questionId: props.question.id,
          eventId: props.event.id
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
      const answer = responseBody.answer
      props.setAnswers([...props.answers, answer])
      setErrors([])
      setAnswerInput({
        answer: "",
        questionId: "",
        eventId: ""
      })
      setShowAnswerForm(false)
    }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const onAnswerSubmit = event => {
    event.preventDefault()
    postAnswer(answerInput)
  }

  let answerForm = null
  if (showAnswerForm) {
    answerForm = (
      <div className=".grid-item ">
          <textarea
            id="answer"
            name="answer"
            className="answer"
            rows="3"
            cols="30"
            onChange={onChange}
            value={answerInput.answer}
          />
          <button onClick={onAnswerSubmit} className="button" type='submit'>Reply</button>
          <button onClick={clearForm} className="button" type='button'>Clear</button>
      </div>
    )
  } else answerForm = null

  return (
    <div className="callout small-6 medium-4 large-3 cell question-tile">
      <div className="question-item">
        {deleteButton}
        <p className="question">{props.question.question}</p>
        <p className="source">{props.question.user.username}</p>
      </div>
      <div className="answer-container">
        {answer}
        <ErrorList2 errors={error}/>
        {answerForm}
      </div>
    </div>
  )
}

export default QuestionTile