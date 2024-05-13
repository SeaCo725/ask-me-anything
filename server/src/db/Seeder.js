/* eslint-disable no-console */
import { connection } from "../boot.js";
import { Category, Event, Host, User, Question } from "../models/index.js"

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

    await Category.query().insert({
      category: "Astronautics",
      description: "The science and technology of human space travel and exploration."
    })
    await Category.query().insert({
      category: "Professional Athlete",
      description: "Professional athletes are people with the ability to play a sport at the highest level of competition."
    })
    await Category.query().insert({
      category: "Healthcare",
      description: "Healthcare professionals work to diagnose, treat, and prevent illnesses and injuries,\
      encompassing fields such as medicine, nursing, pharmacy, and allied health professions."
    })
    //4
    await Category.query().insert({
      category: "Technology",
      description: "The technology sector involves the development, implementation, and maintenance of\
      hardware, software, and systems, driving innovation across various industries and enhancing global connectivity."
    })
    //5
    await Category.query().insert({
      category: "Finance",
      description: "Professionals in finance manage money, investments, and financial transactions, including \
      banking, investment banking, asset management, and financial planning, crucial for economic stability and growth."
    })
    //6
    await Category.query().insert({
      category: "Education",
      description: "Education professionals facilitate learning and development, including teachers, professors, tutors, \
      and administrators, shaping future generations and advancing knowledge."
    })
    //7
    await Category.query().insert({
      category: "Engineering",
      description: "Engineers apply scientific principles to design, build, and maintain structures, systems, and processes, \
      spanning disciplines such as civil, mechanical, electrical, and aerospace engineering."
    })
    //8
    await Category.query().insert({
      category: "Law",
      description: "Legal professionals interpret and uphold laws, provide counsel, and represent clients in legal matters, \
      ensuring justice and fairness in society through practices like litigation, corporate law, and public interest advocacy."
    })
    //9
    await Category.query().insert({
      category: "Media and Entertainment",
      description: "The media and entertainment industry encompasses content creation, distribution, and consumption across \
      various platforms, including film, television, music, gaming, and digital media, shaping culture and entertainment \
      experiences worldwide."
    })

    await Host.query().insert({
      userId: 1,
      categoryId: 1
    })

    await Host.query().insert({
      userId: 2,
      categoryId: 5
    })

    await Event.query().insert({
      description: "Q&A with a real astronaught",
      startDate: "2024-05-14 17:00:00",
      categoryId: 1,
      hostId: 1
    })

    await Event.query().insert({
      description: "A hedge fund manager reveals their secrets",
      startDate: "2024-05-13 16:00:00",
      categoryId: 5,
      hostId: 2
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

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
