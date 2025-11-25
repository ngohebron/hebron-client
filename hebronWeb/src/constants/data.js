// src/constants/data.js

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutus" },
  { label: "Our Work", path: "/ourwork" },
  { label: "Get Involved", path: "/getinvolved" },
  { label: "Gallery", path: "/gallery" },
];


export const faqs = [
  {
    q: "Is your NGO registered and recognized by the government?",
    a: "Yes, we are a legally registered NGO operating under Indian government compliance.",
  },
  {
    q: "Are my donations eligible for tax benefits?",
    a: "Yes, donations are eligible under applicable government tax exemption policies.",
  },
  {
    q: "How do you ensure my donation is used properly?",
    a: "We follow strict transparency, financial audits, and share clear reports with donors.",
  },
  {
    q: "Can I volunteer with your NGO?",
    a: "Absolutely, anyone passionate about social change can volunteer with us.",
  },
  {
    q: "Do you accept corporate or CSR partnerships?",
    a: "Yes, we actively collaborate with CSR teams and corporate organizations.",
  },
  {
    q: "Can I get updates on how my donation is making a difference?",
    a: "Yes, donors receive timely updates, impact stories, and progress reports.",
  },
  {
    q: "How can I donate to support your work?",
    a: "You can donate online through multiple secure payment options listed on our website.",
  },
];

export const stories = [
  {
    id: 1,
    title: "How We Raised 34K",
    desc: `When rising food prices left daily-wage families struggling even for basic meals, we decided that waiting was not an option. 
    Our volunteers came together across different districts, spreading the word through social media, local communities, and personal networks. 
    Small contributions started coming in—₹20, ₹50, and ₹100—proving that impact doesn’t depend on how much you give, but how many hearts unite.
    Within just 10 days, we managed to raise ₹34,000, enough to provide ration kits to multiple families in need.
    Each ration kit contained essentials like rice, wheat, oil, lentils, and spices that could support a family for weeks.
    The happiness and relief in their eyes reminded us why humanity always wins.
    This initiative not only fed hungry families but also restored hope, dignity, and the belief that society still stands together in times of crisis.
    What started as a small idea turned into a wave of kindness we will always be proud of.`,
    img: "/home/c1.jpg",
  },
  {
    id: 2,
    title: "Every Child Deserves a School",
    desc: `Education is not a privilege — it is a fundamental right, yet thousands of children in rural areas walk into a future filled with uncertainty.
    Many of them dream of studying, but poverty, lack of school supplies, and absence of parental awareness become huge barriers.
    We identified children struggling due to the lack of basic learning materials like notebooks, pencils, school bags, uniforms, and shoes.
    With the help of donors and volunteers, we distributed school kits and encouraged parents to continue their children's education.
    The smiles on their faces and the excitement to attend school proved that a small gesture can create a lifetime of opportunities.
    These children are not just students; they are future doctors, teachers, engineers, and leaders.
    Our mission is to ensure that no child drops out because of financial limitations.
    We strongly believe that when you educate a child, you uplift an entire generation.`,
    img: "/home/c2.jpg",
  },
  {
    id: 3,
    title: "The Blanket Drive That Warmed Hearts",
    desc: `Winter can be harsh—but it becomes unbearable for those who sleep without shelter, warm clothing, or blankets.
    When temperatures dropped, our team initiated a blanket donation drive to support vulnerable individuals and needy families.
    With collective efforts, we successfully distributed more than 700 blankets across rural and slum areas.
    Many elderly people, small children, and homeless individuals received a warm blanket that protected them during cold nights.
    Some had tears in their eyes because it was the only warm cover they had in years.
    It wasn’t just a blanket — it was comfort, hope, and a reminder that they are not forgotten.
    We learned that kindness has no season, and compassion requires no reason.
    The warmth we provided didn’t just shield bodies, but touched hearts forever.`,
    img: "/home/c3.jpg",
  },
  {
    id: 4,
    title: "Bringing Health to Their Doorstep",
    desc: `Many remote villages still lack basic access to medical facilities, forcing people to travel miles even for simple treatment.
    To address this, we organized mobile medical camps staffed by doctors, nurses, and trained volunteers.
    Over 500 families received health checkups, medicines, awareness sessions, and hygiene education.
    We focused especially on women, children, and the elderly who typically avoid or delay treatment due to cost or distance.
    The camp included blood pressure checks, diabetes screening, anemia testing, nutrition guidance, and free medication distribution.
    Many undiagnosed health issues were identified, preventing serious outcomes in the future.
    Our goal was not just treatment, but prevention and awareness.
    Health is a basic right — and until every village receives it, our mission continues.`,
    img: "/home/c4.jpg",
  },
];

export const images = [
  "/aboutus/p1.jpg",
  "/aboutus/p2.jpg",
  "/aboutus/p3.jpg",
  "/aboutus/p4.jpg",
  "/aboutus/p5.jpg"
];



export const causes = [
  {
    title: "Provide Nutritious Meal To Hungry Children",
    raised: 65000,
    goal: 100000,
  },
  {
    title: "Empower Youth Through Education",
    raised: 75000,
    goal: 100000,
  },
  {
    title: "Give Warmth And Dignity To Those In Need",
    raised: 80000,
    goal: 100000,
  },
  {
    title: "Help Every Child Grow, Learn, And Thrive",
    raised: 50000,
    goal: 100000,
  },
];

 export const eventImages = [
  "/donationFood/p1.jpg",
  "/donationFood/p2.jpg",
  "/donationFood/p3.jpg",
  "/donationFood/p4.jpg",
  "/donationFood/p5.jpg",
   "/donationFood/p6.jpg",
  "/donationFood/p7.jpg",
  "/donationFood/p8.jpg",
  "/donationFood/p9.jpg",
];
 export const teamMembers = [
  { name: "Mr. Samson Kale", role: "Founder" , image:"/aboutus/founder.png"},
  { name: "Mr. Sandesh Kale", role: "Vice President"  , image:"/aboutus/founder.png"},
  { name: "Mrs. Varsha Kale", role: "Treasurer" , image:"/aboutus/founder.png" },
  { name: "Ms. Tejal Bansode", role: "Secretary"  , image:"/aboutus/founder.png"},
  { name: "Adv. Akash Dalvi", role: "Legal Advisor" , image:"/aboutus/founder.png"},
  { name: "Mr. Kamlakar Sakat", role: "Member" , image:"/aboutus/founder.png" },
  { name: "Mrs. Sulochana Patole", role: "Member"  , image:"/aboutus/founder.png"},
];

export const campaigns_data = [
  {
    item_id: 1,
    card: {
      id: 1,
      image: "/ourwork/image1.jpg",
      title: "Meal of Hope",
      desc: "To fight hunger, promote health, and bring dignity through every meal shared.",
    },
    banner_image: "banner1.jpg",
    title: "Meal of Hope",
    description: "We distribute cooked meals at community centers, shelters, and schools to ensure that individuals have access to hot, nutritious food.",
    why_section: {
      why_section_image: "/ourwork/image1.jpg",
      para_01: "Millions across India still go to bed hungry every night. Malnutrition and lack of access to food not only affect physical health but also rob people of dignity and hope.",
      para_02: "At Hebron Foundation, we believe that a single meal can restore faith, renew energy, and reignite the will to move forward.",
      our_goal: "To fight hunger, promote health, and bring dignity through every meal shared."
    },
    bottom_description: "We provide non-perishable food packages containing essential staples such as rice, lentils, wheat, vegetables, and fruit to families and individuals in need. Our food distribution efforts are designed to not only meet immediate hunger needs but also contribute to long-term health and community well-being.",
    counters: [
      { title: "Meals served", value: 1500, unit:"Lakh" },
      { title: "Ration Kits", value: 12000, unit:"Thousand" },
      { title: "Reach", value: 45, unit:"District" }
    ],
    bottom_image: "/ourwork/image1.jpg",
    scrolleble_section: [
      {
        image: "/ourwork/image1.jpg",
        title: "Child Growth",
        description: "Children learning with joy and curiosity.",
        author: "Rahul"
      },
      {
        image: "/ourwork/image2.jpg",
        title: "New School",
        description: "We built a new school building in the village.",
        author: "Meera"
      },
      {
        image: "/ourwork/image1.jpg",
        title: "Volunteer Support",
        description: "Volunteers helping children improve reading skills.",
        author: "Karan"
      }
    ]
  },

  {
    item_id: 2,
    card: {
      id: 2,
      image: "/ourwork/image2.jpg",
      title: "Learn to Rise",
       desc: "To promote educational equality and empower children to build a brighter future.",
    },
    banner_image: "/ourwork/image2.jpg",
    title: "Learn to Rise",
    description: "We distribute essential educational resources, such as books, stationery, and school supplies, to students from underprivileged backgrounds.",
    why_section: {
      why_section_image: "/ourwork/image2.jpg",
      para_01: "Every child deserves a fair start in education. Yet, countless children drop out of school simply because they cannot afford notebooks or uniforms. This inequality in access perpetuates poverty for generations.",
      para_02: "",
      our_goal: "To promote educational equality and empower children to build a brighter future."
    },
    bottom_description: "We provide complete school kits including bags, books, stationery, and uniforms to children in rural and low-income communities. We collaborate with teachers and social workers to identify children most in need.",
    counters: [
      { title: "Kits Distributed", value: 50000, unit:"Lakh" },
      { title: "Schools Supported", value: 2000 , unit:"+ Schools"},
      { title: "Reach", value: 350 , unit:"+ District" }
    ],
    bottom_image: "/ourwork/image2.jpg",
    scrolleble_section: [
      {
        image: "/ourwork/image2.jpg",
        title: "Meal Drive",
        description: "Huge community support during meal distribution.",
        author: "Priya"
      },
      {
        image: "/ourwork/image2.jpg",
        title: "Kitchen Prep",
        description: "Volunteers preparing fresh meals daily.",
        author: "Ramesh"
      },
      {
        image: "/ourwork/image2.jpg",
        title: "Smiles",
        description: "Children smiling after receiving warm meals.",
        author: "Sneha"
      }
    ]
  },

  {
    item_id: 3,
    card: {
      id: 3,
      image: "/ourwork/image1.jpg",
      title: "Threads of Dignity",
      desc: "To restore confidence, comfort, and dignity by ensuring everyone has the basic necessity of clothing.",
    },
    banner_image: "/ourwork/image1.jpg",
    title: "Threads of Dignity",
    description: "We provide clean, comfortable, & weather-appropriate clothing to individuals and families that are among the underserved population.",
    why_section: {
      why_section_image: "/ourwork/image1.jpg",
      para_01: "Clothing is more than fabric—it’s comfort, confidence, and protection. For those living in poverty or affected by disasters, a clean, warm outfit can mean safety and self-worth.",
      para_02: "",
      our_goal: "Our Goal: To restore confidence, comfort, and dignity by ensuring everyone has the basic necessity of clothing."
    },
    bottom_description: "Hebron Foundation collects gently used and new clothes through donation drives in schools, housing societies, and offices. These are cleaned, sorted, and distributed according to seasonal needs—blankets and woolens in winter, cottons and uniforms in summer.",
    counters: [
      { title: "Clothing Items Distributed", value: 3200 , unit:"Thousands" },
      { title: "Beneficiaries", value: 85 , unit:"Individuals helped" },
      { title: "Reach", value: 18 , unit:"States" }
    ],
    bottom_image: "/ourwork/image1.jpg",
    scrolleble_section: [
      {
        image_url: "/ourwork/image1.jpg",
        title: "Training",
        description: "Women attending advanced skill development workshops.",
        author: "Alka"
      },
      {
        image: "/ourwork/image1.jpg",
        title: "Handmade Products",
        description: "Women showcasing products they crafted.",
        author: "Pooja"
      },
      {
        image: "/ourwork/image1.jpg",
        title: "Community Strength",
        description: "Women supporting each other to grow.",
        author: "Nisha"
      }
    ]
  },

  {
    item_id: 4,
    card: {
      id: 4,
      image: "/ourwork/image1.jpg",
      title: "Bright Minds, Happy Hearts",
      desc: "To support holistic child growth—boosting confidence, emotional intelligence, and community spirit."
    },
    banner_image: "/ourwork/image1.jpg",
    title: "Bright Minds, Happy Hearts",
    description: "This Initiative is focuses on nurturing various aspects of children's growth and learning, to provide children with opportunities to explore their creativity, improve physical fitness, develop social skills, and enhance emotional intelligence. their creativity, improve physical fitness, develop social skills, and enhance emotional intelligence.",
    why_section: {
      why_section_image: "/ourwork/image1.jpg",
      para_01: "Children need more than academics—they need joy, play, and creative learning to grow into healthy, confident individuals. In underprivileged areas, such opportunities are often missing.",
      para_02: "",
      our_goal: "To support holistic child growth—boosting confidence, emotional intelligence, and community spirit."
    },
    bottom_description: "Hebron Foundation hosts weekly child development workshops that include art, music, games, storytelling, and mental health sessions. Trained volunteers and educators encourage teamwork, empathy, and leadership through fun learning experiences.",
    counters: [
      { title: "Children Impacted", value: 4500 , unit:"Thousand" },
      { title: "Partner Organizations", value: 60 , unit:"+ Schools"},
      { title: "Reach", value: 22 , unit:"Districts"}
    ],
    bottom_image: "/ourwork/image1.jpg",
    scrolleble_section: [
      {
        image: "scroll41.jpg",
        title: "Blood Camp",
        description: "Hundreds participated in our blood donation event.",
        author: "Ravi"
      },
      {
        image: "scroll42.jpg",
        title: "Free Checkup",
        description: "Doctors conducting free medical checkups.",
        author: "Dr. Shalini"
      },
      {
        image: "scroll43.jpg",
        title: "Medicine Distribution",
        description: "People receiving free medicines.",
        author: "Gopal"
      }
    ]
  },


]
