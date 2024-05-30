import React, { useEffect } from 'react'
import TopCategories from './TopCategories.js'
import { Link } from 'react-router-dom'
import getTopCategories from '../services/getTopCategories.js'

const CategoriesBar = props => {

  const allEvents = props.events
  const topCategories = getTopCategories(allEvents, 10)
  
  return (
    <nav className='categories-bar'>
      <div className='top-categories'>
        <ul className='top-categories-list'>
          <h6 className='bold'>Top Categories: </h6>
          <li>
            <TopCategories topFive={topCategories}/>
          </li>
        </ul>
        <Link to="/categories">
          <h5 className='browse-all'>Browse All Categories</h5>
        </Link>
      </div>
    </nav>
  )
}

export default CategoriesBar