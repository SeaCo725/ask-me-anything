import QuestionSerializer from "./QuestionSerializer.js"
import CategorySerializer from "./CategorySerializer.js"
import { Event, Category } from "../models/index.js"

class EventSerializer {
  static async summaryForIndex(event) {
    const allowedAttributes = [ 
      "id", 
      "description", 
      "startDate", 
      "categoryId",
      "subcategoryId", 
      "isLive" 
    ]

    let serializedEvent = {}
    for (const attribute of allowedAttributes) {
      serializedEvent[attribute] = event[attribute]
    }

    const currentTime = new Date
    const startDate = new Date(event.startDate)
    const startDateHours = startDate.getUTCHours()
    const setHoursTest = startDate.setUTCHours(startDateHours + 3)
    const startDatePlusThreeHours = new Date(setHoursTest)
    const isThreeHoursPast = currentTime > startDatePlusThreeHours
    if (isThreeHoursPast) {
      const updatedEvent = await Event.query().patchAndFetchById(event.id, {'isLive': false})
      serializedEvent.isLive = updatedEvent.isLive
    }

    const relatedSubcategory = await event.$relatedQuery("categories")
    const relatedCategory = await Category.query().findById(event.categoryId)
    serializedEvent.category = await CategorySerializer.summaryForIndex(relatedCategory)
    serializedEvent.subcategory = await CategorySerializer.summaryForIndex(relatedSubcategory)
    const hostFollowRecord = await event.$relatedQuery("follows").where('isHost', true).first()
    serializedEvent.host = await hostFollowRecord.$relatedQuery('users')
    const relatedQuestions = await event.$relatedQuery("questions")
    serializedEvent.questions = await QuestionSerializer.summaryForList(relatedQuestions)
    return serializedEvent
  }

  static async summaryForCategory(events) {
    const allowedAttributes = [ "id", "description", "startDate", "categoryId", "subcategoryId", "isLive" ]
    const serializedEvents = Promise.all(events.map( async (event) => {
      const serializedEvent = {}
      allowedAttributes.forEach(attribute => {
        serializedEvent[attribute] = event[attribute]
      })
      const hostFollowRecord = await event.$relatedQuery("follows").where('isHost', true).first()
      serializedEvent.host = await hostFollowRecord.$relatedQuery('users')
      return serializedEvent
    }))
    return serializedEvents
  }

  static async summaryForFollowed(events) {
    const allowedAttributes = [ "id", "description", "startDate", "categoryId", "subcategoryId", "isLive" ]
    const serializedEvents = Promise.all(events.map( async (event) => {
      const serializedEvent = {}
      allowedAttributes.forEach(attribute => {
        serializedEvent[attribute] = event[attribute]
      })
      const hostFollowRecord = await event.$relatedQuery("follows").where('isHost', true).first()
      serializedEvent.host = await hostFollowRecord.$relatedQuery('users')
      const relatedCategory = await event.$relatedQuery("categories")
      serializedEvent.category = relatedCategory
  
      return serializedEvent
    }))
    return serializedEvents
  }
}

export default EventSerializer