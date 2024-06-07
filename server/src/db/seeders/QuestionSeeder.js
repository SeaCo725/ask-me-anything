import { Question } from "../../models/index.js"

class QuestionSeeder {
  static async seed() {

    for (let i = 1; i < 90; i++) {
      //1
      await Question.query().insert({
        question: "What is your educational background?",
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //2
      await Question.query().insert({
        question: `Who or what has been the biggest influence in your career or life, 
        and how have they impacted you?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //3
      await Question.query().insert({
        question: `What does a typical day look like for you, and how do you manage 
        your time and responsibilities?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //4
      await Question.query().insert({
        question: `What are some of the biggest challenges you’ve faced in your career, 
        and how did you overcome them?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //5
      await Question.query().insert({
        question: `What is one achievement or moment in your career that you are particularly 
        proud of?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //6
      await Question.query().insert({
        question: `How has your field or industry changed since you started, and where do 
        you see it going in the future?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //7
      await Question.query().insert({
        question: `What advice would you give to someone aspiring to enter your field or 
        follow a similar path?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //8
      await Question.query().insert({
        question: `What are some of your personal interests or hobbies?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //9
      await Question.query().insert({
        question: `If you could change anything, what would you do differently?`,
        eventId: i,
        userId: i+1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //10
      await Question.query().insert({
        question: `How can people contact you?`,
        eventId: i,
        userId: i+1,
      })
    }
    //Questions for specific events
    //11
    await Question.query().insert({
      question: "Did you get sick on lift-off?",
      eventId: 1,
      userId: 11
    })
    //12
    await Question.query().insert({
      question: "Are extra-terrestials real?",
      eventId: 1,
      userId: 2
    })
    //13
    await Question.query().insert({
      question: "Do you think humans will ever build a base on the moon?",
      eventId: 1,
      userId: 12
    })
    //14
    await Question.query().insert({
      question: "What is it like in zero gravity?",
      eventId: 1,
      userId: 13
    })
    //15
    await Question.query().insert({
      question: "Do the space rations taste good?",
      eventId: 1,
      userId: 14
    })
    //11
    await Question.query().insert({
      question: "Who is your highest profile client?",
      eventId: 2,
      userId: 15
    })
    //12
    await Question.query().insert({
      question: "How much do you make per year?",
      eventId: 2,
      userId: 16
    })
    //13
    await Question.query().insert({
      question: "What sectors do you see as growing and which are declining?",
      eventId: 2,
      userId: 17
    })
    //14
    await Question.query().insert({
      question: "Which crypto currency you down with?",
      eventId: 2,
      userId: 18
    })
    //15
    await Question.query().insert({
      question: "What color is your bugati?",
      eventId: 2,
      userId: 19
    })
  }
}

export default QuestionSeeder