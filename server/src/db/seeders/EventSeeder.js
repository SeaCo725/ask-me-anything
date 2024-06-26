import { Event } from "../../models/index.js"
import dateDifference from "../../Services/dateDifference.js"

class EventSeeder {
  static async seed() {

    //1 DATE FORMAT (string): "2024-06-14 17:00:00"
    await Event.query().insert({
      description: "Q&A with a real astronaut",
      startDate: dateDifference(-4,0,-1),
      categoryId: 1,
    })
    //2
    await Event.query().insert({
      description: "A hedge fund manager reveals their secrets",
      startDate: dateDifference(0, -4),
      categoryId: 5,
    })
    //3
    await Event.query().insert({
      description: `A practicing defense attorney answers questions in a way that 
      does not constitute legal advice`,
      startDate: dateDifference(0),
      categoryId: 8,
    })
    //4
    await Event.query().insert({
      description: "Michael Jordan dunks on the haters",
      startDate: dateDifference(2),
      categoryId: 2,
    })
    //5
    await Event.query().insert({
      description: "A Q&A with an experienced nurse",
      startDate: dateDifference(4),
      categoryId: 3,
    })
    //6
    await Event.query().insert({
      description: "Bill Gates fields YOUR questions",
      startDate: dateDifference(6),
      categoryId: 4,
    })
    //7
    await Event.query().insert({
      description: "Global Warming. Fact or Fiction?",
      startDate: dateDifference(8),
      categoryId: 19,
    })
    //8
    await Event.query().insert({
      description: "Rutkers Biology Professor AMA",
      startDate: dateDifference(10),
      categoryId: 6,
    })
    //9
    await Event.query().insert({
      description: "Engineering Guru AMA",
      startDate: dateDifference(12),
      categoryId: 7,
    })
    //10
    await Event.query().insert({
      description: "Legal Expert Open Discussion",
      startDate: dateDifference(14),
      categoryId: 8,
    })
    //11
    await Event.query().insert({
      description: "Time to Judge your questions on my 10 year career as a judge.",
      startDate: dateDifference(16),
      categoryId: 8,
    })
    //12
    await Event.query().insert({
      description: "Media and Entertainment Insider Q&A",
      startDate: dateDifference(18),
      categoryId: 9,
    })
    //13
    await Event.query().insert({
      description: "Software Developer AMA",
      startDate: dateDifference(20),
      categoryId: 10,
    })
    //14
    await Event.query().insert({
      description: "Cybersecurity Specialist Forum",
      startDate: dateDifference(22),
      categoryId: 11,
    })
    //15
    await Event.query().insert({
      description: "Artificial Intelligence Expert Live Q&A",
      startDate: dateDifference(0, 1),
      categoryId: 12,
    })
    //16
    await Event.query().insert({
      description: "Automotive Technician Q&A",
      startDate: dateDifference(2, 1),
      categoryId: 13,
    })
    //17
    await Event.query().insert({
      description: "Pastry Chef Live Q&A",
      startDate: dateDifference(4, 1),
      categoryId: 14,
    })
    //18
    await Event.query().insert({
      description: "Sommelier Wine Discussion",
      startDate: dateDifference(6, 1),
      categoryId: 15,
    })
    //19
    await Event.query().insert({
      description: "Food Safety Inspector AMA",
      startDate: dateDifference(8, 1),
      categoryId: 16,
    })
    //20
    await Event.query().insert({
      description: "Film Director Live Discussion",
      startDate: dateDifference(10, 1),
      categoryId: 17,
    })
    //21
    await Event.query().insert({
      description: "Music Producer Open Forum",
      startDate: dateDifference(12, 1),
      categoryId: 18,
    })
    //22
    await Event.query().insert({
      description: "Climate Scientist Q&A",
      startDate: dateDifference(14, 1),
      categoryId: 19,
    })
    //23
    await Event.query().insert({
      description: "Residential Realtor AMA",
      startDate: dateDifference(16, 1),
      categoryId: 20,
    })
    //24
    await Event.query().insert({
      description: "Exploring the Future of Human Space Travel",
      startDate: dateDifference(18, 1),
      categoryId: 1,
    })
    //25
    await Event.query().insert({
      description: "Insights from a Champion Athlete",
      startDate: dateDifference(20, 1),
      categoryId: 2,
    })
    //26
    await Event.query().insert({
      description: "Advances in Modern Healthcare",
      startDate: dateDifference(22, 1),
      categoryId: 3,
    })
    //27
    await Event.query().insert({
      description: "Tech Trends and Innovations Discussion",
      startDate: dateDifference(0, 2),
      categoryId: 4,
    })
    //28
    await Event.query().insert({
      description: "Financial Markets and Investment Strategies",
      startDate: dateDifference(2, 2),
      categoryId: 5,
    })
    //29
    await Event.query().insert({
      description: "Teaching Techniques and Education Strategies",
      startDate: dateDifference(4, 2),
      categoryId: 6,
    })
    //30
    await Event.query().insert({
      description: "Engineering Breakthroughs Q&A",
      startDate: dateDifference(6, 2),
      categoryId: 7,
    })
    //31
    await Event.query().insert({
      description: "The Role of Law in Society Today",
      startDate: dateDifference(8, 2),
      categoryId: 8,
    })
    //32
    await Event.query().insert({
      description: "Behind the Scenes in Media and Entertainment",
      startDate: dateDifference(10, 2),
      categoryId: 9,
    })
    //33
    await Event.query().insert({
      description: "Programming Best Practices and Tips",
      startDate: dateDifference(12, 2),
      categoryId: 10,
    })
    //34
    await Event.query().insert({
      description: "Cybersecurity Threats and Protection Methods",
      startDate: dateDifference(14, 2),
      categoryId: 11,
    })
    //35
    await Event.query().insert({
      description: "Future Prospects in Artificial Intelligence",
      startDate: dateDifference(16, 2),
      categoryId: 12,
    })
    //36
    await Event.query().insert({
      description: "Auto Repair Techniques and Innovations",
      startDate: dateDifference(18, 2),
      categoryId: 13,
    })
    //37
    await Event.query().insert({
      description: "Creating Art with Pastry: Techniques and Tips",
      startDate: dateDifference(20, 2),
      categoryId: 14,
    })
    //38
    await Event.query().insert({
      description: "Wine Culture and Expert Advice",
      startDate: dateDifference(22, 2),
      categoryId: 15,
    })
    //39
    await Event.query().insert({
      description: "Ensuring Food Safety Standards",
      startDate: dateDifference(0, 3),
      categoryId: 16,
    })
    //40
    await Event.query().insert({
      description: "Film Production: From Script to Screen",
      startDate: dateDifference(2, 3),
      categoryId: 17,
    })
    //41
    await Event.query().insert({
      description: "The Process of Music Production",
      startDate: dateDifference(4, 3),
      categoryId: 18,
    })
    //42
    await Event.query().insert({
      description: "Understanding Climate Change and Its Impact",
      startDate: dateDifference(6, 3),
      categoryId: 19,
    })
    //43
    await Event.query().insert({
      description: "Real Estate Market Insights and Trends",
      startDate: dateDifference(8, 3),
      categoryId: 20,
    })
    //44
    await Event.query().insert({
      description: "Human Spaceflight: Challenges and Solutions",
      startDate: dateDifference(10, 3),
      categoryId: 1,
    })
    //45
    await Event.query().insert({
      description: "Training Regimens of Top Athletes",
      startDate: dateDifference(12, 3),
      categoryId: 2,
    })
    //46
    await Event.query().insert({
      description: "Innovative Treatments in Healthcare",
      startDate: dateDifference(14, 3),
      categoryId: 3,
    })
    //47
    await Event.query().insert({
      description: "Future of Tech: A Panel Discussion",
      startDate: dateDifference(16, 3),
      categoryId: 4,
    })
    //48
    await Event.query().insert({
      description: "Personal Finance Management Tips",
      startDate: dateDifference(18, 3),
      categoryId: 5,
    })
    //49
    await Event.query().insert({
      description: "Interactive Session with Educators",
      startDate: dateDifference(20, 3),
      categoryId: 6,
    })
    //50
    await Event.query().insert({
      description: "Space Exploration: Past, Present, and Future",
      startDate: dateDifference(22, 3),
      categoryId: 1,
    })
    //51
    await Event.query().insert({
      description: "Life as a Pro Athlete: Training and Beyond",
      startDate: dateDifference(0, 4),
      categoryId: 2,
    })
    //52
    await Event.query().insert({
      description: "Breakthroughs in Medical Science",
      startDate: dateDifference(2, 4),
      categoryId: 3,
    })
    //53
    await Event.query().insert({
      description: "Emerging Technologies and Their Impact",
      startDate: dateDifference(4, 4),
      categoryId: 4,
    })
    //54
    await Event.query().insert({
      description: "Investment Strategies in a Changing Economy",
      startDate: dateDifference(6, 4),
      categoryId: 5,
    })
    //55
    await Event.query().insert({
      description: "Innovative Teaching Methods and Their Effectiveness",
      startDate: dateDifference(8, 4),
      categoryId: 6,
    })
    //56
    await Event.query().insert({
      description: "Engineering Challenges and Solutions",
      startDate: dateDifference(10, 4),
      categoryId: 7,
    })
    //57
    await Event.query().insert({
      description: "Legal Ethics and Modern Law Practices",
      startDate: dateDifference(12, 4),
      categoryId: 8,
    })
    //58
    await Event.query().insert({
      description: "The Evolution of Media and Entertainment",
      startDate: dateDifference(14, 4),
      categoryId: 9,
    })
    //59
    await Event.query().insert({
      description: "Advanced Software Development Techniques",
      startDate: dateDifference(16, 4),
      categoryId: 10,
    })
    //60
    await Event.query().insert({
      description: "Cybersecurity: Protecting Your Digital World",
      startDate: dateDifference(18, 4),
      categoryId: 11,
    })
    //61
    await Event.query().insert({
      description: "AI Innovations: Transforming Industries",
      startDate: dateDifference(20, 4),
      categoryId: 12,
    })
    //62
    await Event.query().insert({
      description: "Modern Automotive Technologies",
      startDate: dateDifference(22, 4),
      categoryId: 13,
    })
    //63
    await Event.query().insert({
      description: "Baking Mastery with a Pastry Chef",
      startDate: dateDifference(0, 5),
      categoryId: 14,
    })
    //64
    await Event.query().insert({
      description: "Wine Tasting: From Novice to Connoisseur",
      startDate: dateDifference(2, 5),
      categoryId: 15,
    })
    //65
    await Event.query().insert({
      description: "Ensuring Food Quality and Safety",
      startDate: dateDifference(4, 5),
      categoryId: 16,
    })
    //66
    await Event.query().insert({
      description: "Directing Films: The Art and Craft",
      startDate: dateDifference(6, 5),
      categoryId: 17,
    })
    //67
    await Event.query().insert({
      description: "Inside the Music Studio: Production Insights",
      startDate: dateDifference(8, 5),
      categoryId: 18,
    })
    //68
    await Event.query().insert({
      description: "Climate Change: Science and Solutions",
      startDate: dateDifference(10, 5),
      categoryId: 19,
    })
    //69
    await Event.query().insert({
      description: "Navigating the Real Estate Market",
      startDate: dateDifference(12, 5),
      categoryId: 20,
    })
    //70
    await Event.query().insert({
      description: "Space Missions: Planning and Execution",
      startDate: dateDifference(14, 5),
      categoryId: 1,
    })
    //71
    await Event.query().insert({
      description: "Professional Sports: Career Pathways and Challenges",
      startDate: dateDifference(16, 5),
      categoryId: 2,
    })
    //72
    await Event.query().insert({
      description: "Healthcare Innovations: What's Next?",
      startDate: dateDifference(18, 5),
      categoryId: 3,
    })
    //73
    await Event.query().insert({
      description: "The Future of Technology: A Discussion",
      startDate: dateDifference(20, 5),
      categoryId: 4,
    })
    //74
    await Event.query().insert({
      description: "Financial Planning for the Modern World",
      startDate: dateDifference(22, 5),
      categoryId: 5,
    })
    //75
    await Event.query().insert({
      description: "Effective Education Practices in the 21st Century",
      startDate: dateDifference(0, 6),
      categoryId: 6,
    })
    //76
    await Event.query().insert({
      description: "Innovations in Engineering: A Deep Dive",
      startDate: dateDifference(2, 6),
      categoryId: 7,
    })
    //77
    await Event.query().insert({
      description: "Contemporary Issues in Law",
      startDate: dateDifference(4, 6),
      categoryId: 8,
    })
    //78
    await Event.query().insert({
      description: "Media Evolution: New Trends and Technologies",
      startDate: dateDifference(6, 6),
      categoryId: 9,
    })
    //79
    await Event.query().insert({
      description: "The Essentials of Software Development",
      startDate: dateDifference(8, 6),
      categoryId: 10,
    })
    //80
    await Event.query().insert({
      description: "Cybersecurity in the Digital Age",
      startDate: dateDifference(10, 6),
      categoryId: 11,
    })
    //81
    await Event.query().insert({
      description: "AI in Everyday Life: Applications and Benefits",
      startDate: dateDifference(12, 6),
      categoryId: 12,
    })
    //82
    await Event.query().insert({
      description: "Automotive Maintenance Tips and Tricks",
      startDate: dateDifference(14, 6),
      categoryId: 13,
    })
    //83
    await Event.query().insert({
      description: "Pastry Arts: Techniques and Trends",
      startDate: dateDifference(16, 6),
      categoryId: 14,
    })
    //84
    await Event.query().insert({
      description: "Sommelier Insights: Wine Tasting and Selection",
      startDate: dateDifference(18, 6),
      categoryId: 15,
    })
    //85
    await Event.query().insert({
      description: "Food Safety: Ensuring Quality from Farm to Table",
      startDate: dateDifference(20, 6),
      categoryId: 16,
    })
    //86
    await Event.query().insert({
      description: "Directing 101: The Basics of Filmmaking",
      startDate: dateDifference(22, 6),
      categoryId: 17,
    })
    //87
    await Event.query().insert({
      description: "Music Production: From Concept to Creation",
      startDate: dateDifference(2, 0, 1),
      categoryId: 18,
    })
    //88
    await Event.query().insert({
      description: "Climate Science: Current Research and Findings",
      startDate: dateDifference(4, 0, 6),
      categoryId: 19,
    })
    //89
    await Event.query().insert({
      description: "Residential Real Estate: Tips from the Experts",
      startDate: dateDifference(6, 3, 2, 1),
      categoryId: 20,
    })
  }
}

export default EventSeeder