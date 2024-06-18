import React from 'react'
import { RegExpMatcher, englishDataset, englishRecommendedTransformers } from 'obscenity'
import ErrorList from './layout/ErrorList';


const NewEventForm = props => {

  const matcher = new RegExpMatcher({
    ...englishDataset.build(), 
    ...englishRecommendedTransformers, 
  });

  const combineDateAndTime = (date, time) => {
    const dateTimeString = `${date}T${time}:00`;
    return dateTimeString
  }
  
  const onChangeHandler = event => {
    props.setNewEventData({
      ...props.newEventData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    if (!matcher.hasMatch(props.newEventData.description)) {
      const startDate = combineDateAndTime(props.newEventData.date, props.newEventData.time)
      const updatedEventData = {
        description: props.newEventData.description,
        startDate: startDate,
        categoryId: props.category.id
      }
      props.addEvent(updatedEventData)
    } else {
      props.openModal()
    }
  }

  const clearForm = () => {
    props.setNewEventData({
      date: "",
      time: "",
      description: "",
      categoryId: ""
    })
    props.setErrors({})
  }
  
  return (
    <form className='form-box' onSubmit={onSubmitHandler}>
      <ErrorList errors={props.errors}/>
      <h3>Host Event:</h3>
      <div>
        <label htmlFor='date'> Select Date:
          <input 
            type="date" 
            name="date"
            value={props.newEventData.date} 
            onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        <label htmlFor='time'> Select Time:
          <input 
            type="time" 
            name="time"
            value={props.newEventData.time} 
            onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        <label htmlFor='description'> Description:
          <textarea 
          rows="3"
          cols="40"
          name="description"
          value={props.newEventData.description} 
          onChange={onChangeHandler} />
        </label>
      </div>
      <div className='buttons'>
        <button type="submit" className='button'>Submit</button>
        <button type="button" className='button' onClick={clearForm}>Clear</button>
      </div>
    </form>
  )
}

export default NewEventForm