/* eslint-disable no-console */
import { connection } from "../boot.js";
import { User, Question, Answer } from "../models/index.js"
import CategorySeeder from "./seeders/CategorySeeder.js";
import EventSeeder from "./seeders/EventSeeder.js";
import FollowSeeder from "./seeders/FollowSeeder.js";

class Seeder {
  static async seed() {
    
    for (let i = 1; i <= 150; i++) {
      
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

    //1
    await Question.query().insert({
      question: "What is your education background?",
      eventId: 1,
      userId: 11
    })
    //2
    await Question.query().insert({
      question: "What is your favorite color?",
      eventId: 1,
      userId: 2
    })
    //3
    await Question.query().insert({
      question: "How much do you make per year?",
      eventId: 1,
      userId: 12
    })
    //4
    await Question.query().insert({
      question: "What is it like in zero gravity?",
      eventId: 1,
      userId: 13
    })
    //5
    await Question.query().insert({
      question: "What is your education background?",
      eventId: 1,
      userId: 14
    })
    //6
    await Question.query().insert({
      question: "What is your education background?",
      eventId: 2,
      userId: 15
    })
    //7
    await Question.query().insert({
      question: "How much do you make per year?",
      eventId: 2,
      userId: 16
    })
    //8
    await Question.query().insert({
      question: "Do you even lift, bro?",
      eventId: 2,
      userId: 17
    })
    //9
    await Question.query().insert({
      question: "Which crypto you down with?",
      eventId: 2,
      userId: 18
    })
    //10
    await Question.query().insert({
      question: "What color is your bugati?",
      eventId: 2,
      userId: 19
    })

    await Answer.query().insert({
      answer: "Obviously my new Hedge-coin is best, claim your stake today.",
      questionId: 9,
      eventId: 2
    })
    await Answer.query().insert({
      answer: "Don't be silly. Red is the only real choice.",
      questionId: 10,
      eventId: 2
    })
    await Answer.query().insert({
      answer: "I lift fat stacks of cash every day, where are your gains?",
      questionId: 8,
      eventId: 2
    })
    await Answer.query().insert({
      answer: "the streets",
      questionId: 6,
      eventId: 2
    })
    await Answer.query().insert({
      answer: "more than you",
      questionId:7,
      eventId: 2
    })

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
