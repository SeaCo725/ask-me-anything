/* eslint-disable no-console */
import { connection } from "../boot.js";
import { Category, Event, User, Question, Answer } from "../models/index.js"
import dateDifference from "../Services/dateDifference.js";

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

    //1 DATE FORMAT (string): "2024-06-14 17:00:00"
    await Event.query().insert({
      description: "Q&A with a real astronaut",
      startDate: dateDifference(-4,0,-1),
      categoryId: 1,
      userId: 1
    })
    //2
    await Event.query().insert({
      description: "A hedge fund manager reveals their secrets",
      startDate: dateDifference(0, 8),
      categoryId: 5,
      userId: 2
    })
    //3
    await Event.query().insert({
      description: `A practicing defense attorney answers questions in a way that 
      does not constitute legal advice`,
      startDate: dateDifference(0),
      categoryId: 8,
      userId: 3
    })
    //4
    await Event.query().insert({
      description: "Michael Jordan dunks on the haters",
      startDate: dateDifference(2),
      categoryId: 2,
      userId: 4
    })
    //5
    await Event.query().insert({
      description: "A Q&A with an experienced nurse",
      startDate: dateDifference(4),
      categoryId: 3,
      userId: 5
    })
    //6
    await Event.query().insert({
      description: "Bill Gates fields YOUR questions",
      startDate: dateDifference(6),
      categoryId: 4,
      userId: 6
    })
    //7
    await Event.query().insert({
      description: "Global Warming. Fact or Fiction?",
      startDate: dateDifference(8),
      categoryId: 19,
      userId: 7
    })
    //8
    await Event.query().insert({
      description: "Rutkers Biology Professor AMA",
      startDate: dateDifference(10),
      categoryId: 6,
      userId: 8
    })
    //9
    await Event.query().insert({
      description: "Engineering Guru AMA",
      startDate: dateDifference(12),
      categoryId: 7,
      userId: 15
    })
    //10
    await Event.query().insert({
      description: "Legal Expert Open Discussion",
      startDate: dateDifference(14),
      categoryId: 8,
      userId: 16
    })
    //11
    await Event.query().insert({
      description: "Time to Judge your questions on my 10 year career as a judge.",
      startDate: dateDifference(16),
      categoryId: 8,
      userId: 100
    })
    //12
    await Event.query().insert({
      description: "Media and Entertainment Insider Q&A",
      startDate: dateDifference(18),
      categoryId: 9,
      userId: 17
    })
    //13
    await Event.query().insert({
      description: "Software Developer AMA",
      startDate: dateDifference(20),
      categoryId: 10,
      userId: 18
    })
    //14
    await Event.query().insert({
      description: "Cybersecurity Specialist Forum",
      startDate: dateDifference(22),
      categoryId: 11,
      userId: 19
    })
    //15
    await Event.query().insert({
      description: "Artificial Intelligence Expert Live Q&A",
      startDate: dateDifference(0, 1),
      categoryId: 12,
      userId: 20
    })
    //16
    await Event.query().insert({
      description: "Automotive Technician Q&A",
      startDate: dateDifference(2, 1),
      categoryId: 13,
      userId: 21
    })
    //17
    await Event.query().insert({
      description: "Pastry Chef Live Q&A",
      startDate: dateDifference(4, 1),
      categoryId: 14,
      userId: 22
    })
    //18
    await Event.query().insert({
      description: "Sommelier Wine Discussion",
      startDate: dateDifference(6, 1),
      categoryId: 15,
      userId: 23
    })
    //19
    await Event.query().insert({
      description: "Food Safety Inspector AMA",
      startDate: dateDifference(8, 1),
      categoryId: 16,
      userId: 24
    })
    //20
    await Event.query().insert({
      description: "Film Director Live Discussion",
      startDate: dateDifference(10, 1),
      categoryId: 17,
      userId: 25
    })
    //21
    await Event.query().insert({
      description: "Music Producer Open Forum",
      startDate: dateDifference(12, 1),
      categoryId: 18,
      userId: 26
    })
    //22
    await Event.query().insert({
      description: "Climate Scientist Q&A",
      startDate: dateDifference(14, 1),
      categoryId: 19,
      userId: 27
    })
    //23
    await Event.query().insert({
      description: "Residential Realtor AMA",
      startDate: dateDifference(16, 1),
      categoryId: 20,
      userId: 28
    })
    //24
    await Event.query().insert({
      description: "Exploring the Future of Human Space Travel",
      startDate: dateDifference(18, 1),
      categoryId: 1,
      userId: 29
    })
    //25
    await Event.query().insert({
      description: "Insights from a Champion Athlete",
      startDate: dateDifference(20, 1),
      categoryId: 2,
      userId: 30
    })
    //26
    await Event.query().insert({
      description: "Advances in Modern Healthcare",
      startDate: dateDifference(22, 1),
      categoryId: 3,
      userId: 31
    })
    //27
    await Event.query().insert({
      description: "Tech Trends and Innovations Discussion",
      startDate: dateDifference(0, 2),
      categoryId: 4,
      userId: 32
    })
    //28
    await Event.query().insert({
      description: "Financial Markets and Investment Strategies",
      startDate: dateDifference(2, 2),
      categoryId: 5,
      userId: 33
    })
    let id = 33
    //29
    await Event.query().insert({
      description: "Teaching Techniques and Education Strategies",
      startDate: dateDifference(4, 2),
      categoryId: 6,
      userId: id++
    })
    //30
    await Event.query().insert({
      description: "Engineering Breakthroughs Q&A",
      startDate: dateDifference(6, 2),
      categoryId: 7,
      userId: id++
    })
    //31
    await Event.query().insert({
      description: "The Role of Law in Society Today",
      startDate: dateDifference(8, 2),
      categoryId: 8,
      userId: id++
    })
    //32
    await Event.query().insert({
      description: "Behind the Scenes in Media and Entertainment",
      startDate: dateDifference(10, 2),
      categoryId: 9,
      userId: id++
    })
    //33
    await Event.query().insert({
      description: "Programming Best Practices and Tips",
      startDate: dateDifference(12, 2),
      categoryId: 10,
      userId: id++
    })
    //34
    await Event.query().insert({
      description: "Cybersecurity Threats and Protection Methods",
      startDate: dateDifference(14, 2),
      categoryId: 11,
      userId: id++
    })
    //35
    await Event.query().insert({
      description: "Future Prospects in Artificial Intelligence",
      startDate: dateDifference(16, 2),
      categoryId: 12,
      userId: id++
    })
    //36
    await Event.query().insert({
      description: "Auto Repair Techniques and Innovations",
      startDate: dateDifference(18, 2),
      categoryId: 13,
      userId: id++
    })
    //37
    await Event.query().insert({
      description: "Creating Art with Pastry: Techniques and Tips",
      startDate: dateDifference(20, 2),
      categoryId: 14,
      userId: id++
    })
    //38
    await Event.query().insert({
      description: "Wine Culture and Expert Advice",
      startDate: dateDifference(22, 2),
      categoryId: 15,
      userId: id++
    })
    //39
    await Event.query().insert({
      description: "Ensuring Food Safety Standards",
      startDate: dateDifference(0, 3),
      categoryId: 16,
      userId: id++
    })
    //40
    await Event.query().insert({
      description: "Film Production: From Script to Screen",
      startDate: dateDifference(2, 3),
      categoryId: 17,
      userId: id++
    })
    //41
    await Event.query().insert({
      description: "The Process of Music Production",
      startDate: dateDifference(4, 3),
      categoryId: 18,
      userId: id++
    })
    //42
    await Event.query().insert({
      description: "Understanding Climate Change and Its Impact",
      startDate: dateDifference(6, 3),
      categoryId: 19,
      userId: id++
    })
    //43
    await Event.query().insert({
      description: "Real Estate Market Insights and Trends",
      startDate: dateDifference(8, 3),
      categoryId: 20,
      userId: id++
    })
    //44
    await Event.query().insert({
      description: "Human Spaceflight: Challenges and Solutions",
      startDate: dateDifference(10, 3),
      categoryId: 1,
      userId: id++
    })
    //45
    await Event.query().insert({
      description: "Training Regimens of Top Athletes",
      startDate: dateDifference(12, 3),
      categoryId: 2,
      userId: id++
    })
    //46
    await Event.query().insert({
      description: "Innovative Treatments in Healthcare",
      startDate: dateDifference(14, 3),
      categoryId: 3,
      userId: id++
    })
    //47
    await Event.query().insert({
      description: "Future of Tech: A Panel Discussion",
      startDate: dateDifference(16, 3),
      categoryId: 4,
      userId: id++
    })
    //48
    await Event.query().insert({
      description: "Personal Finance Management Tips",
      startDate: dateDifference(18, 3),
      categoryId: 5,
      userId: id++
    })
    //49
    await Event.query().insert({
      description: "Interactive Session with Educators",
      startDate: dateDifference(20, 3),
      categoryId: 6,
      userId: id++
    })
    //50
    await Event.query().insert({
      description: "Space Exploration: Past, Present, and Future",
      startDate: dateDifference(22, 3),
      categoryId: 1,
      userId: id++
    })
    //51
    await Event.query().insert({
      description: "Life as a Pro Athlete: Training and Beyond",
      startDate: dateDifference(0, 4),
      categoryId: 2,
      userId: id++
    })
    //52
    await Event.query().insert({
      description: "Breakthroughs in Medical Science",
      startDate: dateDifference(2, 4),
      categoryId: 3,
      userId: id++
    })
    //53
    await Event.query().insert({
      description: "Emerging Technologies and Their Impact",
      startDate: dateDifference(4, 4),
      categoryId: 4,
      userId: id++
    })
    //54
    await Event.query().insert({
      description: "Investment Strategies in a Changing Economy",
      startDate: dateDifference(6, 4),
      categoryId: 5,
      userId: id++
    })
    //55
    await Event.query().insert({
      description: "Innovative Teaching Methods and Their Effectiveness",
      startDate: dateDifference(8, 4),
      categoryId: 6,
      userId: id++
    })
    //56
    await Event.query().insert({
      description: "Engineering Challenges and Solutions",
      startDate: dateDifference(10, 4),
      categoryId: 7,
      userId: id++
    })
    //57
    await Event.query().insert({
      description: "Legal Ethics and Modern Law Practices",
      startDate: dateDifference(12, 4),
      categoryId: 8,
      userId: id++
    })
    //58
    await Event.query().insert({
      description: "The Evolution of Media and Entertainment",
      startDate: dateDifference(14, 4),
      categoryId: 9,
      userId: id++
    })
    //59
    await Event.query().insert({
      description: "Advanced Software Development Techniques",
      startDate: dateDifference(16, 4),
      categoryId: 10,
      userId: id++
    })
    //60
    await Event.query().insert({
      description: "Cybersecurity: Protecting Your Digital World",
      startDate: dateDifference(18, 4),
      categoryId: 11,
      userId: id++
    })
    //61
    await Event.query().insert({
      description: "AI Innovations: Transforming Industries",
      startDate: dateDifference(20, 4),
      categoryId: 12,
      userId: id++
    })
    //62
    await Event.query().insert({
      description: "Modern Automotive Technologies",
      startDate: dateDifference(22, 4),
      categoryId: 13,
      userId: id++
    })
    //63
    await Event.query().insert({
      description: "Baking Mastery with a Pastry Chef",
      startDate: dateDifference(0, 5),
      categoryId: 14,
      userId: id++
    })
    //64
    await Event.query().insert({
      description: "Wine Tasting: From Novice to Connoisseur",
      startDate: dateDifference(2, 5),
      categoryId: 15,
      userId: id++
    })
    //65
    await Event.query().insert({
      description: "Ensuring Food Quality and Safety",
      startDate: dateDifference(4, 5),
      categoryId: 16,
      userId: id++
    })
    //66
    await Event.query().insert({
      description: "Directing Films: The Art and Craft",
      startDate: dateDifference(6, 5),
      categoryId: 17,
      userId: id++
    })
    //67
    await Event.query().insert({
      description: "Inside the Music Studio: Production Insights",
      startDate: dateDifference(8, 5),
      categoryId: 18,
      userId: id++
    })
    //68
    await Event.query().insert({
      description: "Climate Change: Science and Solutions",
      startDate: dateDifference(10, 5),
      categoryId: 19,
      userId: id++
    })
    //69
    await Event.query().insert({
      description: "Navigating the Real Estate Market",
      startDate: dateDifference(12, 5),
      categoryId: 20,
      userId: id++
    })
    //70
    await Event.query().insert({
      description: "Space Missions: Planning and Execution",
      startDate: dateDifference(14, 5),
      categoryId: 1,
      userId: id++
    })
    //71
    await Event.query().insert({
      description: "Professional Sports: Career Pathways and Challenges",
      startDate: dateDifference(16, 5),
      categoryId: 2,
      userId: id++
    })
    //72
    await Event.query().insert({
      description: "Healthcare Innovations: What's Next?",
      startDate: dateDifference(18, 5),
      categoryId: 3,
      userId: id++
    })
    //73
    await Event.query().insert({
      description: "The Future of Technology: A Discussion",
      startDate: dateDifference(20, 5),
      categoryId: 4,
      userId: id++
    })
    //74
    await Event.query().insert({
      description: "Financial Planning for the Modern World",
      startDate: dateDifference(22, 5),
      categoryId: 5,
      userId: id++
    })
    //75
    await Event.query().insert({
      description: "Effective Education Practices in the 21st Century",
      startDate: dateDifference(0, 6),
      categoryId: 6,
      userId: id++
    })
    //76
    await Event.query().insert({
      description: "Innovations in Engineering: A Deep Dive",
      startDate: dateDifference(2, 6),
      categoryId: 7,
      userId: id++
    })
    //77
    await Event.query().insert({
      description: "Contemporary Issues in Law",
      startDate: dateDifference(4, 6),
      categoryId: 8,
      userId: id++
    })
    //78
    await Event.query().insert({
      description: "Media Evolution: New Trends and Technologies",
      startDate: dateDifference(6, 6),
      categoryId: 9,
      userId: id++
    })
    //79
    await Event.query().insert({
      description: "The Essentials of Software Development",
      startDate: dateDifference(8, 6),
      categoryId: 10,
      userId: id++
    })
    //80
    await Event.query().insert({
      description: "Cybersecurity in the Digital Age",
      startDate: dateDifference(10, 6),
      categoryId: 11,
      userId: id++
    })
    //81
    await Event.query().insert({
      description: "AI in Everyday Life: Applications and Benefits",
      startDate: dateDifference(12, 6),
      categoryId: 12,
      userId: id++
    })
    //82
    await Event.query().insert({
      description: "Automotive Maintenance Tips and Tricks",
      startDate: dateDifference(14, 6),
      categoryId: 13,
      userId: id++
    })
    //83
    await Event.query().insert({
      description: "Pastry Arts: Techniques and Trends",
      startDate: dateDifference(16, 6),
      categoryId: 14,
      userId: id++
    })
    //84
    await Event.query().insert({
      description: "Sommelier Insights: Wine Tasting and Selection",
      startDate: dateDifference(18, 6),
      categoryId: 15,
      userId: id++
    })
    //85
    await Event.query().insert({
      description: "Food Safety: Ensuring Quality from Farm to Table",
      startDate: dateDifference(20, 6),
      categoryId: 16,
      userId: id++
    })
    //86
    await Event.query().insert({
      description: "Directing 101: The Basics of Filmmaking",
      startDate: dateDifference(22, 6),
      categoryId: 17,
      userId: id++
    })
    //87
    await Event.query().insert({
      description: "Music Production: From Concept to Creation",
      startDate: dateDifference(2, 0, 1),
      categoryId: 18,
      userId: id++
    })
    //88
    await Event.query().insert({
      description: "Climate Science: Current Research and Findings",
      startDate: dateDifference(4, 0, 6),
      categoryId: 19,
      userId: id++
    })
    //89
    await Event.query().insert({
      description: "Residential Real Estate: Tips from the Experts",
      startDate: dateDifference(6, 3, 2, 1),
      categoryId: 20,
      userId: id++
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
