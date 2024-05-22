/* eslint-disable no-console */
import { connection } from "../boot.js";
import { Category, Event, User, Question, Answer } from "../models/index.js"

class Seeder {
  static async seed() {
    
    for (let i = 1; i <= 20; i++) {

      await User.query().insert({
        email: `email${i}@email.com`,
        username: `user${i}`,
        cryptedPassword: "$2b$10$Qva5eK8DC6d4MQpOnjcvde8z7M4AF1uJ3IN5k.LtHq/./RLSXYxqO",
        image: "https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png"
      })
    }
    //1
    await Category.query().insert({
      name: "Astronautics",
      description: "The science and technology of human space travel and exploration."
    })
    //2
    await Category.query().insert({
      name: "Professional Athletics",
      description: "Professional athletes are people with the ability to play a sport \
      at the highest level of competition."
    })
    //3
    await Category.query().insert({
      name: "Healthcare",
      description: "Healthcare professionals work to diagnose, treat, and prevent \
      illnesses and injuries, encompassing fields such as medicine, nursing, pharmacy, \
      and allied health professions."
    })
    //4
    await Category.query().insert({
      name: "Technology",
      description: "The technology sector involves the development, implementation, \
      and maintenance of hardware, software, and systems, driving innovation across \
      various industries and enhancing global connectivity."
    })
    //5
    await Category.query().insert({
      name: "Finance",
      description: "Professionals in finance manage money, investments, and financial \
      transactions, including banking, investment banking, asset management, and financial \
      planning, crucial for economic stability and growth."
    })
    //6
    await Category.query().insert({
      name: "Education",
      description: "Education professionals facilitate learning and development, \
      including teachers, professors, tutors, and administrators, shaping future generations \
      and advancing knowledge."
    })
    //7
    await Category.query().insert({
      name: "Engineering",
      description: "Engineers apply scientific principles to design, build, and maintain \
      structures, systems, and processes, spanning disciplines such as civil, mechanical, \
      electrical, and aerospace engineering."
    })
    //8
    await Category.query().insert({
      name: "Law",
      description: "Legal professionals interpret and uphold laws, provide counsel, \
      and represent clients in legal matters, ensuring justice and fairness in society \
      through practices like litigation, corporate law, and public interest advocacy."
    })
    //9
    await Category.query().insert({
      name: "Media and Entertainment",
      description: "The media and entertainment industry encompasses content creation, \
      distribution, and consumption across various platforms, including film, television, \
      music, gaming, and digital media, shaping culture and entertainment \
      experiences worldwide."
    })
    //10
    await Category.query().insert({
      name: "Software Development",
      description: "Expertise is sought in programming languages, frameworks, and\
      best practices for building applications."
    })
    //11
    await Category.query().insert({
      name: "Cybersecurity",
      description: "Professionals advise on protecting systems, networks, and data \
      from cyber attacks and breaches."
    })
    //12
    await Category.query().insert({
      name: "Artificial Intelligence",
      description: "Experts provide insights into machine learning, neural networks, \
      and the implementation of AI technologies."
    })
    //13
    await Category.query().insert({
      name: "Automotive Technician",
      description: "Skilled mechanics who repair and maintain vehicles, ensuring \
      they run smoothly."
    })
    //14
    await Category.query().insert({
      name: "Pasty Chef",
      description: "Culinary artists specializing in creating baked goods, desserts, \
      and confections."
    })
    //15
    await Category.query().insert({
      name: "Sommelier",
      description: "Wine experts who provide advice on wine selection, pairing, and tasting."
    })
    //16
    await Category.query().insert({
      name: "Food Safety Inspector",
      description: "Professionals who ensure food products meet safety standards and \
      regulations."
    })
    //17
    await Category.query().insert({
      name: "Film Director",
      description: "Creatives who oversee the artistic and dramatic aspects of film production"
    })
    //18
    await Category.query().insert({
      name: "Music Producer",
      description: "Professionals who manage the recording and production of music \
      tracks and albums."
    })
    //19
    await Category.query().insert({
      name: "Climate Scientist",
      description: "Researchers studying climate change and its impacts on the environment \
      and society."
    })
    //20
    await Category.query().insert({
      name: "Residential Realtor",
      description: "Agents who assist clients in buying and selling homes, providing \
      market insights and negotiation skills."
    })

    //1
    await Event.query().insert({
      description: "Q&A with a real astronaught",
      startDate: "2024-06-14 17:00:00",
      categoryId: 1,
      userId: 1
    })
    //2
    await Event.query().insert({
      description: "A hedge fund manager reveals their secrets",
      startDate: "2024-06-21 16:00:00",
      categoryId: 1,
      userId: 2
    })
    //3
    await Event.query().insert({
      description: "A practicing defense attorney answers questions in a way that\
      does not constitute legal advice",
      startDate: "2024-06-20 16:00:00",
      categoryId: 2,
      userId: 3
    })
    //4
    await Event.query().insert({
      description: "Michael Jordan dunks on the haters",
      startDate: "2024-06-18 16:00:00",
      categoryId: 2,
      userId: 4
    })
    //5
    await Event.query().insert({
      description: "A Q&A with an experienced nurse",
      startDate: "2024-05-17 11:30:00",
      categoryId: 2,
      userId: 5
    })
    //6
    await Event.query().insert({
      description: "Bill Gates fields YOUR questions",
      startDate: "2024-06-19 03:00:00",
      categoryId: 4,
      userId: 6
    })
    //1
    await Question.query().insert({
      question: "What is your education background?",
      eventId: 1,
      userId: 1
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
      userId: 1
    })
    //4
    await Question.query().insert({
      question: "What is it like in zero gravity?",
      eventId: 1,
      userId: 1
    })
    //5
    await Question.query().insert({
      question: "What is your education background?",
      eventId: 1,
      userId: 1
    })
    //6
    await Question.query().insert({
      question: "What is your education background?",
      eventId: 2,
      userId: 1
    })
    //7
    await Question.query().insert({
      question: "How much do you make per year?",
      eventId: 2,
      userId: 1
    })
    //8
    await Question.query().insert({
      question: "Do you even lift, bro?",
      eventId: 2,
      userId: 1
    })
    //9
    await Question.query().insert({
      question: "Which crypto you down with?",
      eventId: 2,
      userId: 1
    })
    //10
    await Question.query().insert({
      question: "What color is your bugati?",
      eventId: 2,
      userId: 1
    })

    await Answer.query().insert({
      answer: "Obviously my new Hedge-coin is best, claim your stake today.",
      questionId: 9,
      eventId: 2
    })
    await Answer.query().insert({
      answer: "What a stupid question. Red is the only real choice.",
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
