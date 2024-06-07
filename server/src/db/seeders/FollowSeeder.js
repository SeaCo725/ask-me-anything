import { Follow } from "../../models/index.js"

class FollowSeeder {
  static async seed() {

    for (let i = 1; i < 90; i++) {
      await Follow.query().insert({
        eventId: i,
        userId: i,
        isHost: true
      })
    }
  }
}

export default FollowSeeder