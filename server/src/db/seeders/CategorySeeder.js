import { Category } from "../../models/index.js"

class CategorySeeder {
  static async seed() {
    await Category.query().insert({
      //1
      parent_id: 0,
      name: "Technology",
      description: "The Technology category encompasses a diverse range of fields including \
      software development, cybersecurity, artificial intelligence, and data science. \
      Professionals in this category work on creating, securing, and optimizing digital systems \
      and solutions. The category also includes specializations in cloud computing, IoT, \
      blockchain, and web development, reflecting the broad scope of modern technological \
      advancements and applications. These areas collectively drive innovation and efficiency \
      in various industries worldwide."
    })
    //2
    await Category.query().insert({
      parent_id: 0,
      name: "Food and Cooking",
      description: "The Food and Cooking category covers a wide array of specialties including \
      baking and pastry arts, culinary arts, and kitchen management. It also encompasses nutrition \
      and dietetics, food styling, catering, and event planning, highlighting the diverse roles \
      within the food industry. Professionals in this field range from chefs and bakers to \
      nutritionists, food scientists, and restaurant managers. This category reflects the \
      multifaceted nature of food preparation, presentation, and service, catering to both \
      culinary creativity and dietary science."
    })
    //3
    await Category.query().insert({
      parent_id: 0,
      name: "Business and Finance",
      description: "The Business and Finance category encompasses a wide range of areas including \
      entrepreneurship, corporate strategy, investment, and personal finance. Professionals in this \
      field work on managing financial assets, advising on investment strategies, and optimizing \
      business operations for growth and efficiency. This category also includes specializations in \
      marketing, human resources, and accounting, reflecting the diverse skills needed to support \
      both individual financial health and organizational success. These areas collectively drive \
      economic development and stability across various industries."
    })
    //4
    await Category.query().insert({
      parent_id: 0,
      name: "Health and Wellness",
      description: "The Health and Wellness category covers a broad spectrum of fields focused on \
      improving physical, mental, and overall well-being. This includes nutrition and dietetics, \
      mental health counseling, fitness and personal training, and public health. Professionals in \
      this category work to promote healthy lifestyles, provide therapeutic support, and conduct \
      medical research. The category also includes alternative medicine, physical therapy, nursing, \
      and wellness coaching, reflecting a holistic approach to health care and personal well-being."
    })
    //5
    await Category.query().insert({
      parent_id: 0,
      name: "Education",
      description: "The Education category encompasses various fields aimed at fostering learning \
      and development. This includes primary and secondary education, higher education, and \
      specialized areas like special education and instructional design. Professionals in this \
      category work as teachers, professors, educational administrators, and curriculum developers. \
      The category also covers online learning, educational technology, and student counseling, \
      reflecting the diverse methods and approaches used to support and enhance the educational \
      experience."
    })
    //6
    await Category.query().insert({
      parent_id: 0,
      name: "Science and Envrionment",
      description: "The Science and Environment category spans a wide array of fields dedicated to \
      understanding and protecting our natural world. This includes disciplines like climate \
      science, biology, ecology, and environmental science. Professionals in this category work as \
      researchers, conservationists, environmental engineers, and policy advisors. The category \
      also covers renewable energy, geology, and oceanography, highlighting efforts to address \
      environmental challenges and promote sustainable practices."
    })
    //7
    await Category.query().insert({
      parent_id: 0,
      name: "Arts and Entertainment",
      description: "The Arts and Entertainment category encompasses a diverse range of creative \
      fields including film, television, music, and visual arts. Professionals in this category \
      work as actors, directors, musicians, artists, and writers, creating content that \
      entertains, educates, and inspires audiences. It also includes roles in production, art \
      curation, and event management. This category highlights the dynamic nature of the creative \
      industries, fostering cultural expression and innovation."
    })
    //8
    await Category.query().insert({
      parent_id: 0,
      name: "Society and Culture",
      description: "The Society and Culture category explores the various aspects of human \
      societies and their cultural expressions. This includes fields such as sociology, \
      anthropology, history, and cultural studies. Professionals in this category work as \
      sociologists, historians, cultural analysts, and journalists, examining social behaviors, \
      cultural trends, and historical developments. The category also covers areas like politics, \
      religion, and urban development, reflecting the diverse elements that shape human \
      experiences and societal structures."
    })
    //9
    await Category.query().insert({
      parent_id: 0,
      name: "Lifestyle",
      description: "The Lifestyle category covers various fields focused on enhancing personal \
      quality of life and well-being. This includes areas such as cooking and culinary arts, home \
      improvement, and fashion and beauty. Professionals in this category work as chefs, interior \
      designers, stylists, and wellness coaches, offering expertise and services that cater to \
      individual preferences and lifestyles. The category also encompasses hobbies and crafts, \
      travel, and personal development, reflecting the diverse interests and activities that \
      contribute to a fulfilling and balanced life."
    })
    //10
    await Category.query().insert({
      parent_id: 0,
      name: "Legal and Regulatory",
      description: "The Legal and Regulatory category encompasses fields dedicated to the \
      interpretation, application, and enforcement of laws and regulations. This includes areas \
      such as criminal law, civil rights law, and corporate law. Professionals in this category \
      work as attorneys, judges, compliance officers, and paralegals, providing legal advice, \
      representing clients, and ensuring adherence to legal standards. The category also covers \
      specialties like environmental law, family law, and intellectual property law, reflecting \
      the diverse legal needs of individuals, businesses, and society."
    })
    //11
    await Category.query().insert({
      parent_id: 0,
      name: "Engineering",
      description: "The Engineering category spans a broad range of disciplines focused on \
      designing, building, and maintaining structures, machines, and systems. This includes fields \
      such as civil engineering, mechanical engineering, and electrical engineering. Professionals \
      in this category work as engineers, project managers, and researchers, applying scientific \
      principles to solve practical problems. The category also covers areas like aerospace \
      engineering, biomedical engineering, and environmental engineering, highlighting the diverse \
      applications of engineering in improving technology and infrastructure."
    })
    //12
    await Category.query().insert({
      parent_id: 0,
      name: "Automotive",
      description: "The Automotive category covers a variety of fields related to the design, \
      production, and maintenance of vehicles. This includes areas such as automotive design, \
      engine and powertrain technology, and automotive manufacturing. Professionals in this \
      category work as automotive engineers, technicians, and designers, focusing on developing \
      efficient, safe, and innovative vehicles. The category also encompasses automotive \
      electronics, vehicle dynamics, and the emerging fields of autonomous and connected vehicles, \
      reflecting the ongoing advancements and complexities in the automotive industry."
    })
    //13
    await Category.query().insert({
      parent_id: 0,
      name: "Sports and Recreation",
      description: "The Sports and Recreation category encompasses a wide range of activities and \
      professions dedicated to physical fitness, competitive sports, and leisure activities. This \
      includes fields such as team sports coaching, personal training, and sports medicine. \
      Professionals in this category work as coaches, trainers, sports therapists, and recreation \
      managers, promoting health, teamwork, and athletic performance. The category also covers \
      outdoor adventure sports, sports event management, and sport psychology, reflecting the \
      diverse opportunities for engagement, competition, and personal development in sports and \
      recreational activities."
    })
    //14
    await Category.query().insert({
      parent_id: 0,
      name: "Government and Politics",
      description: "The Government and Politics category encompasses a broad spectrum of fields \
      focused on the organization, management, and analysis of public policies and political \
      systems. This includes areas such as public policy and administration, international \
      relations, and legislative affairs. Professionals in this category work as policymakers, \
      diplomats, political analysts, and public administrators, shaping and implementing policies \
      that affect society. The category also covers political campaign management, public opinion \
      polling, and judicial and legal affairs, reflecting the various roles involved in governance \
      and political strategy."
    })
    //15
    await Category.query().insert({
      parent_id: 0,
      name: "Miscellaneous",
      description: "The Miscellaneous category includes a diverse range of fields and professions \
      that don't neatly fit into other specific categories but are essential and impactful in \
      various aspects of life. This includes areas such as event planning, pet care, and DIY home \
      projects. Professionals in this category work as event coordinators, pet groomers, and \
      hobbyists, offering specialized skills and services. The category also encompasses fields \
      like astrology, survival skills, and collecting antiques, reflecting the wide array of \
      interests and expertise that contribute to the richness of human experience."
    })

    //Subcategories for Technology
    // 16
    await Category.query().insert({
      parent_id: 1,
      name: "Artificial Intelligence and Machine Learning"
    })
    // 17
    await Category.query().insert({
      parent_id: 1,
      name: "Cybersecurity"
    })
    // 18
    await Category.query().insert({
      parent_id: 1,
      name: "Software Development and Programming"
    })
    // 19
    await Category.query().insert({
      parent_id: 1,
      name: "Consumer Electronics"
    })
    // 20  
    await Category.query().insert({
      parent_id: 1,
      name: "Blockchain and Cryptocurrencies"
    })
    // 21
    await Category.query().insert({
      parent_id: 1,
      name: "Internet of Things (IoT)"
    })
    // 22
    await Category.query().insert({
      parent_id: 1,
      name: "Cloud Computing"
    })
    // 23
    await Category.query().insert({
      parent_id: 1,
      name: "Data Science and Analytics"
    })
    // 24 
    await Category.query().insert({
      parent_id: 1,
      name: "Virtual Reality (VR) and Augmented Reality (AR)"
    })
    // 25 
    await Category.query().insert({
      parent_id: 1,
      name: "Web Development and Design"
    })
    // 26
    await Category.query().insert({
      parent_id: 1,
      name: "Theoretical or Futuristic Technology"
    })
    // 27
    await Category.query().insert({
      parent_id: 1,
      name: "Breakthrough Technologies"
    })

    //Subcategories for Food and Cooking

    // 28
    await Category.query().insert({
      parent_id: 2,
      name: "Baking and Pastry Arts"
    })
    // 29
    await Category.query().insert({
      parent_id: 2,
      name: "Culinary Arts and Kitchen Management"
    })
    // 30
    await Category.query().insert({
      parent_id: 2,
      name: "Food and Beverage Service"
    })
    // 31
    await Category.query().insert({
      parent_id: 2,
      name: "Nutrition and Dietetics"
    })
    // 32
    await Category.query().insert({
      parent_id: 2,
      name: "Food Styling and Photography"
    })
    // 33
    await Category.query().insert({
      parent_id: 2,
      name: "Catering and Event Planning"
    })
    // 34
    await Category.query().insert({
      parent_id: 2,
      name: "Wine and Beverage Expertise"
    })
    // 35
    await Category.query().insert({
      parent_id: 2,
      name: "Food Critique and Journalism"
    })
    // 36
    await Category.query().insert({
      parent_id: 2,
      name: "Food Science and Technology"
    })
    // 37
    await Category.query().insert({
      parent_id: 2,
      name: "Restaurant and Hospitality Management"
    })
    // 38
    await Category.query().insert({
      parent_id: 2,
      name: "Food Safety and Inspection"
    })

    //Subcategories for Business and Finance

    // 39
    await Category.query().insert({
      parent_id: 3,
      name: "Entrepeneurship and Startups"
    })
    // 40
    await Category.query().insert({
      parent_id: 3,
      name: "Investment and Stock Market"
    })
    // 41
    await Category.query().insert({
      parent_id: 3,
      name: "Personal Finance and Budgeting"
    })
    // 42
    await Category.query().insert({
      parent_id: 3,
      name: "Corporate Strategy"
    })
    // 43
    await Category.query().insert({
      parent_id: 3,
      name: "Marketing and Advertising"
    })
    // 44
    await Category.query().insert({
      parent_id: 3,
      name: "Real Estate"
    })
    // 45
    await Category.query().insert({
      parent_id: 3,
      name: "E-commerce"
    })
    // 46
    await Category.query().insert({
      parent_id: 3,
      name: "Human Resources and Recruitment"
    })
    // 47
    await Category.query().insert({
      parent_id: 3,
      name: "Accounting and Taxation"
    })
    // 48
    await Category.query().insert({
      parent_id: 3,
      name: "Leadership and Organizational Development"
    })

    //Subcategories for Health and Wellness

    // 49
    await Category.query().insert({
      parent_id: 4,
      name: "Nutrition and Diet"
    })
    // 50
    await Category.query().insert({
      parent_id: 4,
      name: "Mental Health and Counseling"
    })
    // 51
    await Category.query().insert({
      parent_id: 4,
      name: "Fitness and Exercise"
    })
    // 52
    await Category.query().insert({
      parent_id: 4,
      name: "Medical Conditions and Treatments"
    })
    // 53
    await Category.query().insert({
      parent_id: 4,
      name: "Alternative and Complementary Medicine"
    })
    // 54
    await Category.query().insert({
      parent_id: 4,
      name: "Public Health and Epidemiology"
    })
    // 55
    await Category.query().insert({
      parent_id: 4,
      name: "Nursing and Patient Care"
    })
    // 56
    await Category.query().insert({
      parent_id: 4,
      name: "Medical Research and Clinical Trials"
    })
    // 57
    await Category.query().insert({
      parent_id: 4,
      name: "Healthcare Policy and Management"
    })
    // 58
    await Category.query().insert({
      parent_id: 4,
      name: "Physcial Therapy and Rehabilitation"
    })
    // 59
    await Category.query().insert({
      parent_id: 4,
      name: "Wellness and Preventative Care"
    })
    // 60
    await Category.query().insert({
      parent_id: 4,
      name: "Sleep Science"
    })

    //Subcategories for Education
    // 61
    await Category.query().insert({
      parent_id: 5,
      name: "K-12 Education"
    })
    // 62
    await Category.query().insert({
      parent_id: 5,
      name: "Higher Education and University Life"
    })
    // 63
    await Category.query().insert({
      parent_id: 5,
      name: "Online Learning and EdTech"
    })
    // 64
    await Category.query().insert({
      parent_id: 5,
      name: "Special Education"
    })
    // 65
    await Category.query().insert({
      parent_id: 5,
      name: "Language Learning"
    })
    // 66
    await Category.query().insert({
      parent_id: 5,
      name: "STEM Education"
    })
    // 67
    await Category.query().insert({
      parent_id: 5,
      name: "Educational Psychology"
    })
    // 68
    await Category.query().insert({
      parent_id: 5,
      name: "Cirriculum Development"
    })
    // 69
    await Category.query().insert({
      parent_id: 5,
      name: "Student Mental Health and Well-being"
    })
    // 70
    await Category.query().insert({
      parent_id: 5,
      name: "Teaching Strategies and Pedagogy"
    })

    //Subcategories for Science and Environment
    // 71
    await Category.query().insert({
      parent_id: 6,
      name: "Climate Change and Sustainability"
    })
    // 72
    await Category.query().insert({
      parent_id: 6,
      name: "Astronomy and Space Exploration"
    })
    // 73
    await Category.query().insert({
      parent_id: 6,
      name: "Biology and Genetics"
    })
    // 74
    await Category.query().insert({
      parent_id: 6,
      name: "Environment Science and Ecology"
    })
    // 75
    await Category.query().insert({
      parent_id: 6,
      name: "Physics and Chemistry"
    })
    // 76
    await Category.query().insert({
      parent_id: 6,
      name: "Geology and Earth Sciences"
    })
    // 77
    await Category.query().insert({
      parent_id: 6,
      name: "Renewable Energy"
    })
    // 78
    await Category.query().insert({
      parent_id: 6,
      name: "Conservation of Wildlife"
    })
    // 79
    await Category.query().insert({
      parent_id: 6,
      name: "Oceanography"
    })
    // 80
    await Category.query().insert({
      parent_id: 6,
      name: "Scientific Research Methods"
    })

    // Subcategories for Arts and Entertainment
    // 81
    await Category.query().insert({
      parent_id: 7,
      name: "Film and Television"
    })
    // 82
    await Category.query().insert({
      parent_id: 7,
      name: "Music Industry"
    })
    // 83
    await Category.query().insert({
      parent_id: 7,
      name: "Literature and Writing"
    })
    // 84
    await Category.query().insert({
      parent_id: 7,
      name: "Visual Arts and Design"
    })
    // 85
    await Category.query().insert({
      parent_id: 7,
      name: "Performing Arts (Theatre, Dance, etc.)"
    })
    // 86
    await Category.query().insert({
      parent_id: 7,
      name: "Fashion and Style"
    })
    // 87
    await Category.query().insert({
      parent_id: 7,
      name: "Video Games and Interactive Media"
    })
    // 88
    await Category.query().insert({
      parent_id: 7,
      name: "Photography"
    })
    // 89
    await Category.query().insert({
      parent_id: 7,
      name: "Cultural Studies"
    })
    // 90
    await Category.query().insert({
      parent_id: 7,
      name: "Art History"
    })

    // Subcategories for Society and Culture
    // 91
    await Category.query().insert({
      parent_id: 8,
      name: "Sociology and Anthropology"
    })
    // 92
    await Category.query().insert({
      parent_id: 8,
      name: "History"
    })
    // 93
    await Category.query().insert({
      parent_id: 8,
      name: "Religion and Philosophy"
    })
    // 94
    await Category.query().insert({
      parent_id: 8,
      name: "Gender Studies"
    })
    // 95
    await Category.query().insert({
      parent_id: 8,
      name: "Media and Journalism"
    })
    // 96
    await Category.query().insert({
      parent_id: 8,
      name: "Social Justice and Advocacy"
    })
    // 97
    await Category.query().insert({
      parent_id: 8,
      name: "Travel and Tourism"
    })
    // 98
    await Category.query().insert({
      parent_id: 8,
      name: "Languages and Linguistics"
    })
    // 99
    await Category.query().insert({
      parent_id: 8,
      name: "Urban Development and Planning"
    })

    // Subcategories for Lifestyle
    // 100
    await Category.query().insert({
      parent_id: 9,
      name: "Cooking and Culinary Arts"
    })
    // 101
    await Category.query().insert({
      parent_id: 9,
      name: "Home Improvement and DIY"
    });
    // 102
    await Category.query().insert({
      parent_id: 9,
      name: "Fashion and Beauty"
    });
    // 103
    await Category.query().insert({
      parent_id: 9,
      name: "Personal Development"
    });
    // 104
    await Category.query().insert({
      parent_id: 9,
      name: "Gardening"
    });
    // 105
    await Category.query().insert({
      parent_id: 9,
      name: "Relationships and Dating"
    });
    // 106
    await Category.query().insert({
      parent_id: 9,
      name: "Parenting and Family Life"
    });
    // 107
    await Category.query().insert({
      parent_id: 9,
      name: "Hobbies and Crafts"
    });
    // 108
    await Category.query().insert({
      parent_id: 9,
      name: "Lavish Spending"
    });
    // 109
    await Category.query().insert({
      parent_id: 9,
      name: "Wellness and Sustainable Living"
    });

    // Subcategories for Legal and Regulatory
    // 110
    await Category.query().insert({
      parent_id: 10,
      name: "Criminal Law"
    });
    // 111
    await Category.query().insert({
      parent_id: 10,
      name: "Civil Rights Law"
    });
    // 112
    await Category.query().insert({
      parent_id: 10,
      name: "Corporate Law"
    });
    // 113
    await Category.query().insert({
      parent_id: 10,
      name: "Environmental Law"
    });
    // 114
    await Category.query().insert({
      parent_id: 10,
      name: "Family Law"
    });
    // 115
    await Category.query().insert({
      parent_id: 10,
      name: "Intellectual Property Law"
    });
    // 116
    await Category.query().insert({
      parent_id: 10,
      name: "Health and Medical Law"
    });
    // 117
    await Category.query().insert({
      parent_id: 10,
      name: "Immigration Law"
    });
    // 118
    await Category.query().insert({
      parent_id: 10,
      name: "Labor and Employment Law"
    });
    // 119
    await Category.query().insert({
      parent_id: 10,
      name: "Tax Law"
    });

    // Subcategories for Engineering
    // 120
    await Category.query().insert({
      parent_id: 11,
      name: "Civil Engineering"
    });
    // 121
    await Category.query().insert({
      parent_id: 11,
      name: "Mechanical Engineering"
    });
    // 122
    await Category.query().insert({
      parent_id: 11,
      name: "Electrical Engineering"
    });
    // 123
    await Category.query().insert({
      parent_id: 11,
      name: "Chemical Engineering"
    });
    // 124
    await Category.query().insert({
      parent_id: 11,
      name: "Aerospace Engineering"
    });
    // 125
    await Category.query().insert({
      parent_id: 11,
      name: "Biomedical Engineering"
    });
    // 126
    await Category.query().insert({
      parent_id: 11,
      name: "Environmental Engineering"
    });
    // 127
    await Category.query().insert({
      parent_id: 11,
      name: "Software Engineering"
    });
    // 128
    await Category.query().insert({
      parent_id: 11,
      name: "Industrial Engineering"
    });
    // 129
    await Category.query().insert({
      parent_id: 11,
      name: "Marine Engineering"
    });

    // Subcategories for Automotive
    // 130
    await Category.query().insert({
      parent_id: 12,
      name: "Automotive Design"
    });
    // 131
    await Category.query().insert({
      parent_id: 12,
      name: "Engine and Powertrain Technology"
    });
    // 132
    await Category.query().insert({
      parent_id: 12,
      name: "Automotive Manufacturing"
    });
    // 133
    await Category.query().insert({
      parent_id: 12,
      name: "Automotive Electronics"
    });
    // 134
    await Category.query().insert({
      parent_id: 12,
      name: "Vehicle Dynamics and Handling"
    });
    // 135
    await Category.query().insert({
      parent_id: 12,
      name: "Fuel Technology and Emissions"
    });
    // 136
    await Category.query().insert({
      parent_id: 12,
      name: "Automotive Safety Systems"
    });
    // 137
    await Category.query().insert({
      parent_id: 12,
      name: "Autonomous and Connected Vehicles"
    });
    // 138
    await Category.query().insert({
      parent_id: 12,
      name: "Automotive Aftermarket and Maintenance"
    });
    // 139
    await Category.query().insert({
      parent_id: 12,
      name: "Motorcycle Engineering"
    });

    // Subcategories for Sports and Recreation
    // 140
    await Category.query().insert({
      parent_id: 13,
      name: "Team Sports Coaching"
    });
    // 141
    await Category.query().insert({
      parent_id: 13,
      name: "Personal Training and Fitness Instruction"
    });
    // 142
    await Category.query().insert({
      parent_id: 13,
      name: "Sports Medicine and Rehabilitation"
    });
    // 143
    await Category.query().insert({
      parent_id: 13,
      name: "Athletic Performance Analysis"
    });
    // 144
    await Category.query().insert({
      parent_id: 13,
      name: "Outdoor Adventure Sports"
    });
    // 145
    await Category.query().insert({
      parent_id: 13,
      name: "Water Sports and Aquatics"
    });
    // 146
    await Category.query().insert({
      parent_id: 13,
      name: "Winter Sports"
    });
    // 147
    await Category.query().insert({
      parent_id: 13,
      name: "Recreational Sports Management"
    });
    // 148
    await Category.query().insert({
      parent_id: 13,
      name: "Sports Event Planning and Management"
    });
    // 149
    await Category.query().insert({
      parent_id: 13,
      name: "Sport Psychology"
    });
    
    // Subcategories for Government and Politics
    // 150
    await Category.query().insert({
      parent_id: 14,
      name: "Public Policy and Administration"
    });
    // 151
    await Category.query().insert({
      parent_id: 14,
      name: "International Relations and Diplomacy"
    });
    // 152
    await Category.query().insert({
      parent_id: 14,
      name: "Legislative Affairs"
    });
    // 153
    await Category.query().insert({
      parent_id: 14,
      name: "Political Campaign Management"
    });
    // 154
    await Category.query().insert({
      parent_id: 14,
      name: "Public Opinion and Polling"
    });
    // 155
    await Category.query().insert({
      parent_id: 14,
      name: "Political Consulting and Strategy"
    });
    // 156
    await Category.query().insert({
      parent_id: 14,
      name: "Government Finance and Budgeting"
    });
    // 157
    await Category.query().insert({
      parent_id: 14,
      name: "Local Government and Municipal Management"
    });
    // 158
    await Category.query().insert({
      parent_id: 14,
      name: "Public Health Policy"
    });
    // 159
    await Category.query().insert({
      parent_id: 14,
      name: "Judicial and Legal Affairs"
    });
    
    // Subcategories for Miscellaneous
    // 160
    await Category.query().insert({
      parent_id: 15,
      name: "Event Planning and Management"
    });
    // 161
    await Category.query().insert({
      parent_id: 15,
      name: "Pet Care"
    });
    // 162
    await Category.query().insert({
      parent_id: 15,
      name: "Trading Card Games"
    });
    // 162
    await Category.query().insert({
      parent_id: 15,
      name: "Astrology and Mysticism"
    });
    // 163
    await Category.query().insert({
      parent_id: 15,
      name: "Survival Skills and Preparedness"
    });
    // 164
    await Category.query().insert({
      parent_id: 15,
      name: "Collecting Antiques"
    });
    // 165
    await Category.query().insert({
      parent_id: 15,
      name: "Firearms and Shooting Sports"
    });
    // 166
    await Category.query().insert({
      parent_id: 15,
      name: "Genealogy"
    });
    // 167
    await Category.query().insert({
      parent_id: 15,
      name: "Model Building"
    });
    // 168
    await Category.query().insert({
      parent_id: 15,
      name: "Volunteering and Philanthropy"
    });
  }
}

export default CategorySeeder