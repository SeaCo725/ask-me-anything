/* eslint-disable no-console */
import { connection } from "../boot.js";
import { User } from "../models/index.js"
import CategorySeeder from "./seeders/CategorySeeder.js";
import EventSeeder from "./seeders/EventSeeder.js";
import FollowSeeder from "./seeders/FollowSeeder.js";
import QuestionSeeder from "./seeders/QuestionSeeder.js";

class Seeder {
  static async seed() {
    
    await User.query().insert({
      email: 'admin@email.com',
      username: 'admin',
      cryptedPassword: "$2b$10$Qva5eK8DC6d4MQpOnjcvde8z7M4AF1uJ3IN5k.LtHq/./RLSXYxqO",
      image: "https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png"
    })

    for (let i = 2; i <= 150; i++) {
      
      await User.query().insert({
        email: `email${i}@email.com`,
        username: `user${i}`,
        cryptedPassword: "$2b$10$Qva5eK8DC6d4MQpOnjcvde8z7M4AF1uJ3IN5k.LtHq/./RLSXYxqO",
        image: "https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png"
      })
    }

    await CategorySeeder.seed()
    await EventSeeder.seed()
    await FollowSeeder.seed()
    await QuestionSeeder.seed()

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
