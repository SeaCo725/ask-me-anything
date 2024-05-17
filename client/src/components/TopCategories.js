import React from "react"
import { Link } from 'react-router-dom'

const TopCategories = (props) => {

  const topFiveCategories = props.topFive
  const topFiveLinks = topFiveCategories.map((category, index) => (
    <div className="inline-container" key={index}>
      <Link to={`/categories/${category}`}>
        <p className="inline-element">{category}</p>
      </Link>
    </div>
  ))
  
  return (
    <div className="flex-container">
      {topFiveLinks}
    </div>
  )
}

export default TopCategories