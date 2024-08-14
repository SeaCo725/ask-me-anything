import React, {useState} from 'react'
import { RegExpMatcher, englishDataset, englishRecommendedTransformers } from 'obscenity'
import ErrorList from './layout/ErrorList';
import translateServerErrors from "../services/translateServerErrors";

const NewEventForm = props => {
  const [newEventData, setNewEventData] = useState({
    date: "",
    time: "",
    description: "",
    subCategory: "",
    categoryId: "",
    subcategoryId: ""
  })

  const matcher = new RegExpMatcher({
    ...englishDataset.build(), 
    ...englishRecommendedTransformers, 
  });

  const combineDateAndTime = (date, time) => {
    const dateTimeString = `${date}T${time}:00`;
    return dateTimeString
  }
  
  const onChangeHandler = event => {
    setNewEventData({
      ...newEventData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const addEvent = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/events", {
        method: 'POST',
        headers: new Headers ({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const errorBody = await response.json()
          const newErrors = translateServerErrors(errorBody.errors)
          return props.setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
    } else {
      const responseBody = await response.json()
      props.setCategory({...props.category, events: [...props.category.events, responseBody.event ]})
      setNewEventData({
        date: "",
        time: "",
        description: "",
        categoryId: ""
      })
      props.setErrors({})
    }
    } catch (error) {
      console.error(`Error in the fetch:${ error.message }`)
    }
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    if (!matcher.hasMatch(newEventData.description)) {
      const startDate = combineDateAndTime(newEventData.date, newEventData.time)
      const updatedEventData = {
        description: newEventData.description,
        startDate: startDate,
        categoryId: props.category.id,
        subcategoryId: newEventData.subcategoryId
      }
      addEvent(updatedEventData)
    } else {
      props.openModal()
    }
  }

  const clearForm = () => {
    setNewEventData({
      date: "",
      time: "",
      description: "",
      categoryId: "",
      subCategory: ""
    })
    props.setErrors({})
  }

  if (newEventData.subCategory) {
    props.category.subCategories.forEach(subCategory => {
      if (subCategory.name === newEventData.subCategory) {
        newEventData.subcategoryId = subCategory.id
      }
    });
  } else newEventData.subcategoryId = ""
    
    const blankOption = <option key="" value=""></option>
    
    const subCategoryList = props.category.subCategories.map(subCategory => {
      return (
        <option key={subCategory.id} value={subCategory.name}>
          {subCategory.name}
        </option>
      )
    })
    
    const subCategoryOptions = [blankOption, ...subCategoryList]
    
  return (
    <form className='form-box' onSubmit={onSubmitHandler}>
      <ErrorList errors={props.errors}/>
      <h3>Host Event:</h3>
      <div>
        <label htmlFor='date'> Select Date:
          <input 
            type="date" 
            name="date"
            value={newEventData.date} 
            onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        <label htmlFor='time'> Select Time:
          <input 
            type="time" 
            name="time"
            value={newEventData.time} 
            onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        <label htmlFor='subCategory'> Subcategory:</label>
          <select 
            name="subCategory" 
            onChange={onChangeHandler}
            value={newEventData.subCategory}
          >
            {subCategoryOptions}
          </select>
      </div>
      <div>
        <label htmlFor='description'> Description:
          <textarea 
          rows="3"
          cols="40"
          name="description"
          value={newEventData.description} 
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