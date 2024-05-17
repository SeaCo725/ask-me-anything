import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const CategoriesList = (props) => {
  const [categories, setCategories] = useState([])

  const getCategories = async props => {
    try {
      const response = await fetch("/api/v1/categories")
      const parsedResponse = await response.json()
      setCategories(parsedResponse.categories)
    } catch (error) {
      console.error(`Error in the fetch: ${error.message}`)
    }
  }

  const categoriesList = categories.map((category, index) => (
    <div className="cell small-6 medium-4 large-2" key={index}>
      <Link to={`/categories/${category.name}`}>
        <p className="multi-column-list">{category.name}</p>
      </Link>
    </div>
  ))

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div>
      <h1>All Categories:</h1>
      <div className="grid-x">
        {categoriesList}
      </div>
    </div>
  )
}

export default CategoriesList