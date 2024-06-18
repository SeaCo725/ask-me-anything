import { Question } from "../../models/index.js"

class QuestionSeeder {
  static async seed() {

    for (let i = 1; i < 90; i++) {
      //1
      await Question.query().insert({
        question: "What is your educational background?",
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //2
      await Question.query().insert({
        question: `Who or what has been the biggest influence in your career or life, 
        and how have they impacted you?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //3
      await Question.query().insert({
        question: `What does a typical day look like for you, and how do you manage 
        your time and responsibilities?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //4
      await Question.query().insert({
        question: `What are some of the biggest challenges you’ve faced in your career, 
        and how did you overcome them?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //5
      await Question.query().insert({
        question: `What is one achievement or moment in your career that you are particularly 
        proud of?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //6
      await Question.query().insert({
        question: `How has your field or industry changed since you started, and where do 
        you see it going in the future?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //7
      await Question.query().insert({
        question: `What advice would you give to someone aspiring to enter your field or 
        follow a similar path?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //8
      await Question.query().insert({
        question: `What are some of your personal interests or hobbies?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //9
      await Question.query().insert({
        question: `If you could change anything, what would you do differently?`,
        eventId: i,
        userId: 1,
      })
    }
    for (let i = 1; i < 90; i++) {
      //10
      await Question.query().insert({
        question: `How can people contact you?`,
        eventId: i,
        userId: 1,
      })
    }
    //Questions and answers for specific events
    //11
    const sick = await Question.query().insert({
      question: "Did you get sick on lift-off?",
      eventId: 1,
      userId: 11
    })
    await sick.$relatedQuery('answers').insert({ 
      answer: `I didn't personally and I won't name names, but I know a few guys who 
      did.`, 
      eventId: 1
    })
    //12
    const aliens = await Question.query().insert({
      question: "Are extra-terrestials real?",
      eventId: 1,
      userId: 2
    })
    await aliens.$relatedQuery('answers').insert({ 
      answer: `No comment.`,
      eventId: 1,
    })
    //13
    const moonBase = await Question.query().insert({
      question: "Do you think humans will ever build a base on the moon?",
      eventId: 1,
      userId: 12
    })
    await moonBase.$relatedQuery('answers').insert({ 
      answer: `I'm confident it will happen in our lifetime. There are a lot of great 
      reasons to do so, I just hope it is not used for malicious purposes.`,
      eventId: 1,
    })
    //14
    const gravity = await Question.query().insert({
      question: "What is it like in zero gravity?",
      eventId: 1,
      userId: 13
    })
    await gravity.$relatedQuery('answers').insert({ 
      answer: `It's very strange, but it becomes normal a lot quicker than you would 
      imagine.`,
      eventId: 1,
    })
    //15
    const rations = await Question.query().insert({
      question: "Do the space rations taste good?",
      eventId: 1,
      userId: 14
    })
    await rations.$relatedQuery('answers').insert({ 
      answer: `Thankfully they are pretty good. Just because they come in a tube doesn't 
      mean you can't have sugar in space!`,
      eventId: 1,
    })
    //11
    const client = await Question.query().insert({
      question: "Who is your highest profile client?",
      eventId: 2,
      userId: 15
    })
    await client.$relatedQuery('answers').insert({ 
      answer: `I've got clients all over Hollywood and Wall Street, I'm not naming any 
      names but one of them was stuck on Mars for a while.`,
      eventId: 2,
    })
    //12
    const money = await Question.query().insert({
      question: "How much do you make per year?",
      eventId: 2,
      userId: 16
    })
    await money.$relatedQuery('answers').insert({ 
      answer: `When you get to this point you stop counting.`,
      eventId: 2,
    })
    //13
    const sectors = await Question.query().insert({
      question: "What sectors do you see as growing and which are declining?",
      eventId: 2,
      userId: 17
    })
    await sectors.$relatedQuery('answers').insert({ 
      answer: `Crypto and NFTs are hot, real estate and retail are losers.`,
      eventId: 2,
    })
    //14
    const crypto = await Question.query().insert({
      question: "Which crypto currency you down with?",
      eventId: 2,
      userId: 18
    })
    await crypto.$relatedQuery('answers').insert({ 
      answer: `I'm so glad you asked. For a limited time you can get 50% off your stake 
      of my new MadMoneyMax coin. It's going to be crazy.`,
      eventId: 2,
    })
    //15
    const color = await Question.query().insert({
      question: "What color is your bugati?",
      eventId: 2,
      userId: 19
    })
    await color.$relatedQuery('answers').insert({ 
      answer: `Don't be daft. I obviously got one in every color.`,
      eventId: 2,
    })
  }
}

export default QuestionSeeder