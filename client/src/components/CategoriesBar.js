import React, { useEffect } from 'react'
import TopCategories from './TopCategories.js'
import { Link } from 'react-router-dom'
import getTopCategories from '../services/getTopCategories.js'

const CategoriesBar = props => {

  const allEvents = props.events
  const topFive = getTopCategories(allEvents, 5)
  
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>
            Top Categories: 
          </li>
          <li>
            <TopCategories topFive={topFive}/>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <Link to="/categories">
          <p className='browse'>Browse All Categories</p>
        </Link>
      </div>
    </div>
  )
}

export default CategoriesBar