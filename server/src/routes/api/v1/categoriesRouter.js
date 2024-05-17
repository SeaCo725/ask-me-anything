import express from "express"
import CategorySerializer from "../../../Serializers/CategorySerializer.js"
import Category from "../../../models/Category.js"

const categoriesRouter = new express.Router()

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.query()
    const serializedCategories = await Promise.all(categories.map(async category => {
      return await CategorySerializer.summaryForIndex(category)
    }))
    res.status(200).json({ categories: serializedCategories })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

categoriesRouter.get("/:categoryName", async (req, res) => {
  try {
    const categoryName = req.params.categoryName
    const category = await Category.query().where('name', 'ILIKE', categoryName).first()
    const serializedCategory = await CategorySerializer.summaryForIndex(category)
    res.status(200).json({ category: serializedCategory})
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error})
  }
})

export default categoriesRouter