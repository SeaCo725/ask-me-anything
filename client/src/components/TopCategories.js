import React from "react"
import { Link } from 'react-router-dom'

const TopCategories = (props) => {

  const topFiveCategories = props.topFive
  const topFiveLinks = topFiveCategories.map((category, index) => (
    <div className="top-categories" key={index}>
      <Link to={`/categories/${category}`}>
        <p className="">{category}</p>
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