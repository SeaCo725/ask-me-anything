import { Category } from "../../models/index.js"

class CategorySeeder {
  static async seed() {
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
  }
}

export default CategorySeeder