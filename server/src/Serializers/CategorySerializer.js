import EventSerializer from "./EventSerializer.js"

class CategorySerializer {
  static async summaryForIndex(category) {
    const allowedAttributes = [ "id", "name", "description" ]

    let serializedCategory = {}
    for (const attribute of allowedAttributes) {
      serializedCategory[attribute] = category[attribute]
    }
    const relatedEvents = await category.$relatedQuery('events')
    serializedCategory.events = await EventSerializer.summaryForCategory(relatedEvents)
    return serializedCategory
  }
}

export default CategorySerializer