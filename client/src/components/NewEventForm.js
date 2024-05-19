import React, { useState } from 'react'

const NewEventForm = props => {

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
    const startDate = combineDateAndTime(props.newEventData.date, props.newEventData.time)
    const updatedEventData = {
      description: props.newEventData.description,
      startDate: startDate,
      userId: props.user.id,
      categoryId: props.category.id
    }
    props.addEvent(updatedEventData)
  }
  return (
    <form onSubmit={onSubmitHandler}>
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
      <button type="submit" className='button'>Submit</button>
    </form>
  )
}

export default NewEventForm