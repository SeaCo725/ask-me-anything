import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import NewEventForm from "./NewEventForm";
import Modal from 'react-modal'
import LiveEvents from "./LiveEvents";
import UpcomingEvents from './UpcomingEvents'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app')

const CategoryPage = (props) => {
  const [category, setCategory] = useState({
    events: [],
    subCategories: [
      {name: ""},
    ]
  })
  const [errors, setErrors] = useState({})
  const { categoryName } = useParams()
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal =() => {
    setIsOpen(false);
  }

  const profanityModal = (
    <div>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Oops</h2>
      <button className="delete-circle" onClick={closeModal}>X</button>
      <p>Our profanity filter has detected one or more words that are not acceptable for submission.</p>
      <p>Please edit your input and resubmit.</p>
    </Modal>
  </div>
  )

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryName}`)
      const responseBody = await response.json()
      setCategory(responseBody.category)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  const categoryEvents = category.events

  return (
    <div>
      <div className="category-header">
        <h1>Welcome to {category.name}!</h1>
        <h4>{category.description}</h4>
      </div>
      {modalIsOpen ? profanityModal : null}
      <LiveEvents events={categoryEvents}/>
      <UpcomingEvents events={categoryEvents} />
      {props.user ?
      <div className="form-container">
        <NewEventForm
          errors={errors} 
          setErrors={setErrors}
          category={category} 
          setCategory={setCategory}
          user={props.user}
          openModal={openModal}
        />
      </div> : <p>Login to create an event.</p>}
    </div>
  )
}

export default CategoryPage