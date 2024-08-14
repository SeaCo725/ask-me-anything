import { Event } from "../../models/index.js";
import dateDifference from "../../Services/dateDifference.js";

class EventSeeder {
  static async seed() {
    await Event.query().insert({
      description: "Q&A with a real astronaut",
      startDate: dateDifference(-4, 0, -1),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "A hedge fund manager reveals their secrets",
      startDate: dateDifference(0, -4),
      categoryId: 3, // Business and Finance
      subcategoryId: 40, // Investment and Stock Market
    });

    await Event.query().insert({
      description: `A practicing defense attorney answers questions in a way that 
      does not constitute legal advice`,
      startDate: dateDifference(0),
      categoryId: 10, // Legal and Regulatory
      subcategoryId: 110, // Criminal Law
    });

    await Event.query().insert({
      description: "Michael Jordan dunks on the haters",
      startDate: dateDifference(2),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "A Q&A with an experienced nurse",
      startDate: dateDifference(4),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Bill Gates fields YOUR questions",
      startDate: dateDifference(6),
      categoryId: 1, // Technology
      subcategoryId: 20, // Blockchain and Cryptocurrencies
    });

    await Event.query().insert({
      description: "Global Warming. Fact or Fiction?",
      startDate: dateDifference(8),
      categoryId: 6, // Science and Environment
      subcategoryId: 71, // Climate Change and Sustainability
    });

    await Event.query().insert({
      description: "Rutkers Biology Professor AMA",
      startDate: dateDifference(10),
      categoryId: 6, // Science and Environment
      subcategoryId: 74, // Environmental Science and Ecology
    });

    await Event.query().insert({
      description: "Engineering Guru AMA",
      startDate: dateDifference(12),
      categoryId: 11, // Engineering
      subcategoryId: 122, // Electrical Engineering
    });

    await Event.query().insert({
      description: "Legal Expert Open Discussion",
      startDate: dateDifference(14),
      categoryId: 10, // Legal and Regulatory
      subcategoryId: 110, // Criminal Law
    });

    await Event.query().insert({
      description: "Time to Judge your questions on my 10 year career as a judge.",
      startDate: dateDifference(16),
      categoryId: 10, // Legal and Regulatory
      subcategoryId: 159, // Judicial and Legal Affairs
    });

    await Event.query().insert({
      description: "Media and Entertainment Insider Q&A",
      startDate: dateDifference(18),
      categoryId: 7, // Arts and Entertainment
      subcategoryId: 81, // Film and Television
    });

    await Event.query().insert({
      description: "Software Developer AMA",
      startDate: dateDifference(20),
      categoryId: 1, // Technology
      subcategoryId: 18, // Software Development and Programming
    });

    await Event.query().insert({
      description: "Cybersecurity Specialist Forum",
      startDate: dateDifference(22),
      categoryId: 1, // Technology
      subcategoryId: 17, // Cybersecurity
    });

    await Event.query().insert({
      description: "Artificial Intelligence Expert Live Q&A",
      startDate: dateDifference(0, 1),
      categoryId: 1, // Technology
      subcategoryId: 16, // Artificial Intelligence and Machine Learning
    });

    await Event.query().insert({
      description: "Automotive Technician Q&A",
      startDate: dateDifference(2, 1),
      categoryId: 12, // Automotive
      subcategoryId: 131, // Engine and Powertrain Technology
    });

    await Event.query().insert({
      description: "Pastry Chef Live Q&A",
      startDate: dateDifference(4, 1),
      categoryId: 2, // Food and Cooking
      subcategoryId: 28, // Baking and Pastry Arts
    });

    await Event.query().insert({
      description: "Sommelier Wine Discussion",
      startDate: dateDifference(6, 1),
      categoryId: 2, // Food and Cooking
      subcategoryId: 34, // Wine and Beverage Expertise
    });

    await Event.query().insert({
      description: "Food Safety Inspector AMA",
      startDate: dateDifference(8, 1),
      categoryId: 2, // Food and Cooking
      subcategoryId: 38, // Food Safety and Inspection
    });

    await Event.query().insert({
      description: "Film Director Live Discussion",
      startDate: dateDifference(10, 1),
      categoryId: 7, // Arts and Entertainment
      subcategoryId: 81, // Film and Television
    });

    await Event.query().insert({
      description: "Music Producer Open Forum",
      startDate: dateDifference(12, 1),
      categoryId: 7, // Arts and Entertainment
      subcategoryId: 82, // Music Industry
    });

    await Event.query().insert({
      description: "Climate Scientist Q&A",
      startDate: dateDifference(14, 1),
      categoryId: 6, // Science and Environment
      subcategoryId: 71, // Climate Change and Sustainability
    });

    await Event.query().insert({
      description: "Residential Realtor AMA",
      startDate: dateDifference(16, 1),
      categoryId: 3, // Business and Finance
      subcategoryId: 44, // Real Estate
    });

    await Event.query().insert({
      description: "Exploring the Future of Human Space Travel",
      startDate: dateDifference(18, 1),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Insights from a Champion Athlete",
      startDate: dateDifference(20, 1),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "Advances in Modern Healthcare",
      startDate: dateDifference(22, 1),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Tech Trends and Innovations Discussion",
      startDate: dateDifference(0, 2),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Financial Markets and Investment Strategies",
      startDate: dateDifference(2, 2),
      categoryId: 3, // Business and Finance
      subcategoryId: 40, // Investment and Stock Market
    });

    await Event.query().insert({
      description: "Teaching Techniques and Education Strategies",
      startDate: dateDifference(4, 2),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "Engineering Breakthroughs Q&A",
      startDate: dateDifference(6, 2),
      categoryId: 11, // Engineering
      subcategoryId: 120, // Civil Engineering
    });

    await Event.query().insert({
      description: "The Role of Law in Society Today",
      startDate: dateDifference(8, 2),
      categoryId: 10, // Legal and Regulatory
      subcategoryId: 110, // Criminal Law
    });

    await Event.query().insert({
      description: "Behind the Scenes in Media and Entertainment",
      startDate: dateDifference(10, 2),
      categoryId: 7, // Arts and Entertainment
      subcategoryId: 81, // Film and Television
    });

    await Event.query().insert({
      description: "Programming Best Practices and Tips",
      startDate: dateDifference(12, 2),
      categoryId: 1, // Technology
      subcategoryId: 18, // Software Development and Programming
    });

    await Event.query().insert({
      description: "Cybersecurity Threats and Protection Methods",
      startDate: dateDifference(14, 2),
      categoryId: 1, // Technology
      subcategoryId: 17, // Cybersecurity
    });

    await Event.query().insert({
      description: "Future Prospects in Artificial Intelligence",
      startDate: dateDifference(16, 2),
      categoryId: 1, // Technology
      subcategoryId: 16, // Artificial Intelligence and Machine Learning
    });

    await Event.query().insert({
      description: "Auto Repair Techniques and Innovations",
      startDate: dateDifference(18, 2),
      categoryId: 12, // Automotive
      subcategoryId: 131, // Engine and Powertrain Technology
    });

    await Event.query().insert({
      description: "Creating Art with Pastry: Techniques and Tips",
      startDate: dateDifference(20, 2),
      categoryId: 2, // Food and Cooking
      subcategoryId: 28, // Baking and Pastry Arts
    });

    await Event.query().insert({
      description: "Wine Culture and Expert Advice",
      startDate: dateDifference(22, 2),
      categoryId: 2, // Food and Cooking
      subcategoryId: 34, // Wine and Beverage Expertise
    });

    await Event.query().insert({
      description: "Ensuring Food Safety Standards",
      startDate: dateDifference(0, 3),
      categoryId: 2, // Food and Cooking
      subcategoryId: 38, // Food Safety and Inspection
    });

    await Event.query().insert({
      description: "Film Production: From Script to Screen",
      startDate: dateDifference(2, 3),
      categoryId: 7, // Arts and Entertainment
      subcategoryId: 81, // Film and Television
    });

    await Event.query().insert({
      description: "The Process of Music Production",
      startDate: dateDifference(4, 3),
      categoryId: 7, // Arts and Entertainment
      subcategoryId: 82, // Music Industry
    });

    await Event.query().insert({
      description: "Understanding Climate Change and Its Impact",
      startDate: dateDifference(6, 3),
      categoryId: 6, // Science and Environment
      subcategoryId: 71, // Climate Change and Sustainability
    });

    await Event.query().insert({
      description: "Real Estate Market Insights and Trends",
      startDate: dateDifference(8, 3),
      categoryId: 3, // Business and Finance
      subcategoryId: 44, // Real Estate
    });

    await Event.query().insert({
      description: "Human Spaceflight: Challenges and Solutions",
      startDate: dateDifference(10, 3),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Training Regimens of Top Athletes",
      startDate: dateDifference(12, 3),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "Innovative Treatments in Healthcare",
      startDate: dateDifference(14, 3),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Future of Tech: A Panel Discussion",
      startDate: dateDifference(16, 3),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Personal Finance Management Tips",
      startDate: dateDifference(18, 3),
      categoryId: 3, // Business and Finance
      subcategoryId: 41, // Personal Finance and Budgeting
    });

    await Event.query().insert({
      description: "Interactive Session with Educators",
      startDate: dateDifference(20, 3),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "Space Exploration: Past, Present, and Future",
      startDate: dateDifference(22, 3),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Life as a Pro Athlete: Training and Beyond",
      startDate: dateDifference(0, 4),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "The Future of Healthcare",
      startDate: dateDifference(2, 4),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Cloud Computing Trends",
      startDate: dateDifference(4, 4),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Investment Strategies",
      startDate: dateDifference(6, 4),
      categoryId: 3, // Business and Finance
      subcategoryId: 40, // Investment and Stock Market
    });

    await Event.query().insert({
      description: "Modern Teaching Techniques",
      startDate: dateDifference(8, 4),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "Space Exploration Developments",
      startDate: dateDifference(10, 4),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Training Programs for Athletes",
      startDate: dateDifference(12, 4),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "Advances in Healthcare Technology",
      startDate: dateDifference(14, 4),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Cloud Computing Innovations",
      startDate: dateDifference(16, 4),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Personal Finance Advice",
      startDate: dateDifference(18, 4),
      categoryId: 3, // Business and Finance
      subcategoryId: 41, // Personal Finance and Budgeting
    });

    await Event.query().insert({
      description: "Challenges in Higher Education",
      startDate: dateDifference(20, 4),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "The Future of Space Exploration",
      startDate: dateDifference(22, 4),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Training Techniques for Professional Athletes",
      startDate: dateDifference(0, 5),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "Innovations in Healthcare",
      startDate: dateDifference(2, 5),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Trends in Cloud Computing",
      startDate: dateDifference(4, 5),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Investment Tips",
      startDate: dateDifference(6, 5),
      categoryId: 3, // Business and Finance
      subcategoryId: 40, // Investment and Stock Market
    });

    await Event.query().insert({
      description: "Effective Teaching Methods",
      startDate: dateDifference(8, 5),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "Astronomy and Space Science",
      startDate: dateDifference(10, 5),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Athlete Nutrition and Training",
      startDate: dateDifference(12, 5),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "Technological Advances in Medicine",
      startDate: dateDifference(14, 5),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Cloud Computing and Future Trends",
      startDate: dateDifference(16, 5),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Budgeting and Personal Finance Tips",
      startDate: dateDifference(18, 5),
      categoryId: 3, // Business and Finance
      subcategoryId: 41, // Personal Finance and Budgeting
    });

    await Event.query().insert({
      description: "Higher Education Challenges and Opportunities",
      startDate: dateDifference(20, 5),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "The Future of Space Travel",
      startDate: dateDifference(22, 5),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Training Techniques of Elite Athletes",
      startDate: dateDifference(0, 6),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "Innovations in Medical Technology",
      startDate: dateDifference(2, 6),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Emerging Trends in Cloud Computing",
      startDate: dateDifference(4, 6),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Investment Tips for the Modern Investor",
      startDate: dateDifference(6, 6),
      categoryId: 3, // Business and Finance
      subcategoryId: 40, // Investment and Stock Market
    });

    await Event.query().insert({
      description: "Effective Teaching Strategies",
      startDate: dateDifference(8, 6),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "Astronomy and Space Exploration",
      startDate: dateDifference(10, 6),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Athlete Nutrition and Performance",
      startDate: dateDifference(12, 6),
      categoryId: 13, // Sports and Recreation
      subcategoryId: 140, // Team Sports Coaching
    });

    await Event.query().insert({
      description: "Technological Advances in Healthcare",
      startDate: dateDifference(14, 6),
      categoryId: 4, // Health and Wellness
      subcategoryId: 55, // Nursing and Patient Care
    });

    await Event.query().insert({
      description: "Cloud Computing and Its Future",
      startDate: dateDifference(16, 6),
      categoryId: 1, // Technology
      subcategoryId: 22, // Cloud Computing
    });

    await Event.query().insert({
      description: "Budgeting and Personal Finance Tips",
      startDate: dateDifference(18, 6),
      categoryId: 3, // Business and Finance
      subcategoryId: 41, // Personal Finance and Budgeting
    });

    await Event.query().insert({
      description: "Higher Education Challenges and Opportunities",
      startDate: dateDifference(20, 6),
      categoryId: 5, // Education
      subcategoryId: 70, // Teaching Strategies and Pedagogy
    });

    await Event.query().insert({
      description: "The Future of Space Travel",
      startDate: dateDifference(22, 6),
      categoryId: 6, // Science and Environment
      subcategoryId: 72, // Astronomy and Space Exploration
    });

    await Event.query().insert({
      description: "Music Production: From Concept to Creation",
      startDate: dateDifference(2, 0, 1),
      categoryId: 7, // Arts and Entertainment
      subcategoryId: 82, // Music
    });

    await Event.query().insert({
      description: "Climate Science: Current Research and Findings",
      startDate: dateDifference(4, 0, 6),
      categoryId: 6, // Science and Environment
      subcategoryId: 71, // Climate Science
    });

    await Event.query().insert({
      description: "Residential Real Estate: Tips from the Experts",
      startDate: dateDifference(6, 3, 2, 1),
      categoryId: 3, // Business and Finance
      subcategoryId: 44, // Real Estate
    });
  }
}

export default EventSeeder;
