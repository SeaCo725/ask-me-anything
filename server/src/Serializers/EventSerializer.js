import QuestionSerializer from "./QuestionSerializer.js"
import CategorySerializer from "./CategorySerializer.js"

class EventSerializer {
  static async summaryForIndex(event) {
    const allowedAttributes = [ "id", "description", "startDate", "categoryId", "userId" ]

    let serializedEvent = {}
    for (const attribute of allowedAttributes) {
      serializedEvent[attribute] = event[attribute]
    }
    const relatedCategory = await event.$relatedQuery("categories")
    serializedEvent.category = await CategorySerializer.summaryForIndex(relatedCategory)
    serializedEvent.host = await event.$relatedQuery("users")
    const relatedQuestions = await event.$relatedQuery("questions")
    serializedEvent.questions = await QuestionSerializer.summaryForList(relatedQuestions)
    return serializedEvent
  }

  static async summaryForCategory(events) {
    const allowedAttributes = [ "id", "description", "startDate", "categoryId", "userId" ]
    const serializedEvents = Promise.all(events.map( async (event) => {
      const serializedEvent = {}
      allowedAttributes.forEach(attribute => {
        serializedEvent[attribute] = event[attribute]
      })
      serializedEvent.host = await event.$relatedQuery("users")
      return serializedEvent
    }))
    return serializedEvents
  }
}

export default EventSerializer