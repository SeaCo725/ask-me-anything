import QuestionSerializer from "./QuestionSerializer.js"

class EventSerializer {
  static async summaryForIndex(event) {
    const allowedAttributes = [ "id", "description", "startDate", "categoryId", "userId" ]

    let serializedEvent = {}
    for (const attribute of allowedAttributes) {
      serializedEvent[attribute] = event[attribute]
    }
    serializedEvent.category = await event.$relatedQuery("categories")
    serializedEvent.host = await event.$relatedQuery("users")
    const relatedQuestions = await event.$relatedQuery("questions")
    serializedEvent.questions = await QuestionSerializer.summaryForList(relatedQuestions)
    return serializedEvent
  }
}

export default EventSerializer