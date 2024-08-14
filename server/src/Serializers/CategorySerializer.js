import EventSerializer from "./EventSerializer.js"
import Category from '../models/Category.js'

class CategorySerializer {
  static async summaryForIndex(category) {
    const allowedAttributes = [ "id", "parent_id", "name", "description" ]

    let serializedCategory = {}
    for (const attribute of allowedAttributes) {
      serializedCategory[attribute] = category[attribute]
    }
    serializedCategory.subCategories = await Category.query().where('parent_id', '=', category.id)
    const relatedEvents = await category.$relatedQuery('events')
    serializedCategory.events = await EventSerializer.summaryForCategory(relatedEvents)
    return serializedCategory
  }
}

export default CategorySerializer