export interface Testimonial {
  id: string;
  name: string;
  course: string;
  achievement: string;
  placedAt?: string;
  city: string;
  image?: string;
  quote: string;
  verified: boolean;
  batch?: string;
  rating?: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t-arshpreet",
    name: "Arshpreet Kaur",
    course: "ACCA (Global Chartered Accountant) & Advanced Analytics",
    achievement: "Outstanding Result in Financial Accounting (FA), ACCA October Attempt",
    placedAt: "SKD Merit Ranker & Scholar",
    city: "Chandigarh",
    image: "/assets/results/Enhanced_Photo_06.jpg",
    quote:
      "Studying at SKD Group for my ACCA papers was the best decision for my career. The faculty at Godrej Eternia gave me personal attention, cleared every single doubt, and the computer-based exam mock tests gave me huge confidence on exam day. The sessions were highly interactive and informative, and the concepts were explained thoroughly with practical exam problem solving!",
    verified: true,
    batch: "October 2026 Exam Batch",
    rating: 5,
  },
  {
    id: "t-hitesh",
    name: "Hitesh Goyal",
    course: "ACCA (Global Chartered Accountant)",
    achievement: "High Marks Clearance in Financial Accounting (FA), ACCA October Attempt",
    placedAt: "SKD Ranker Cohort",
    city: "Chandigarh",
    image: "/assets/results/Enhanced_Photo_09.jpg",
    quote:
      "Consistent practice on computer-based mock tests and faculty doubt-clearing sessions gave me the confidence to excel on my exam day. The mentors at SKD simplify complex standards and make learning engaging.",
    verified: true,
    batch: "October 2026 Exam Batch",
    rating: 5,
  },
  {
    id: "t-aryan",
    name: "Aryan Thakur",
    course: "Data Analytics (60 Hours Industrial Training)",
    achievement: "Industrial Training Clearance & Certified",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.23 PM (2).jpeg",
    quote:
      "You made every topic easy to understand by explaining everything in a simple and patient way. I have learned a lot and feel much more confident applying data analysis concepts now.",
    verified: true,
    batch: "15-Day Industrial Internship Batch",
    rating: 5,
  },
  {
    id: "t-ayan-meer",
    name: "Ayan Meer",
    course: "Advanced Excel & Power BI (Industrial Training)",
    achievement: "Mastered Dashboards, Pivot Tables & Power Query",
    city: "Mohali",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
    quote:
      "The 15-day Advanced Excel and Power BI training at SKD Institute was excellent. The trainer explained complex topics like pivot tables, VLOOKUP, macros, and dashboards in a clear, practical way. Hands-on exercises and real-world examples made learning engaging. Doubts were resolved patiently, and the pace was well balanced. I now feel confident applying these skills professionally. Highly recommended!",
    verified: true,
    batch: "15-Day Internship Program",
    rating: 5,
  },
  {
    id: "t-shrishty",
    name: "Shrishty Chaudhary",
    course: "Advanced Excel Workshop",
    achievement: "Excel Financial Modeling Participant",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.32 PM.jpeg",
    quote:
      "So knowledgeable workshop and the way you teach us is incredible. Thank you for being such a wonderful mentor during our Advanced Excel workshop. Today being our last day, I wanted to express how much I appreciate your patience and dedication in simplifying tough topics for us. I'm truly grateful for everything I've learned under your guidance.",
    verified: true,
    batch: "Advanced Excel Workshop Batch",
    rating: 5,
  },
  {
    id: "t-atharav",
    name: "Atharav Sharma",
    course: "MS Excel & Advanced Excel (20 Hours Industrial Training)",
    achievement: "Completed 20-Hour Professional Certification",
    city: "Panchkula",
    image: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM (1).jpeg",
    quote:
      "The way you explained every topic, provided us with practice questions, and patiently cleared all our doubts made learning easy and interesting. Excellent faculty support throughout!",
    verified: true,
    batch: "15-Day Industrial Training",
    rating: 5,
  },
  {
    id: "t-neha",
    name: "Neha",
    course: "Advanced Excel (15-Day Internship)",
    achievement: "Practical Business Functions & Formulas Certification",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.33 PM.jpeg",
    quote:
      "The 15-day Advanced Excel internship was a great learning experience. I learned many useful Excel functions and improved my practical knowledge. The sessions were informative, easy to understand, and helpful for my future career. I appreciate this wonderful opportunity!",
    verified: true,
    batch: "15-Day Internship Cohort",
    rating: 5,
  },
  {
    id: "t-shubham",
    name: "Shubham Maurya",
    course: "Advanced Excel Formulas & Dashboards",
    achievement: "Mastered Advanced Formulas & Automation",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.34 PM.jpeg",
    quote:
      "Thank you Ma'am, for teaching Excel so well. Your explanation made even difficult formulas easy. Really grateful for the support and patient mentorship!",
    verified: true,
    batch: "Excel Training Cohort",
    rating: 5,
  },
  {
    id: "t-nissen",
    name: "Nissen Varghese Binu",
    course: "Data Analytics (60 Hours Industrial Training)",
    achievement: "Business Data Analysis Certified",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.33 PM.jpeg",
    quote:
      "It was a great learning journey. The content was excellent, and the sessions were incredibly helpful. Hands-on datasets made the analytical concepts come alive.",
    verified: true,
    batch: "Data Analytics Internship",
    rating: 5,
  },
  {
    id: "t-ashish",
    name: "Ashish Kumar",
    course: "Advanced Excel (15-Day Training)",
    achievement: "Enhanced Technical & Spreadsheet Competency",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.36 PM.jpeg",
    quote:
      "Thank you team SKD for this excellent 15-day advanced excel training. The sessions were informative and practical helping me enhance my excel skills and technical knowledge. It was a valuable learning experience and I truly appreciate this opportunity.",
    verified: true,
    batch: "15-Day Training Batch",
    rating: 5,
  },
  {
    id: "t-vansh",
    name: "Vansh Rawal",
    course: "Advanced Excel in Business",
    achievement: "Business Case Modeling Certification",
    city: "Panchkula",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.00 PM.jpeg",
    quote:
      "Thank you so much for providing us with this wonderful session. The session was quite interactive, informative, and easy to understand. It showed us exactly how Excel works in real business scenarios.",
    verified: true,
    batch: "Corporate Skills Cohort",
    rating: 5,
  },
  {
    id: "t-aaryansh",
    name: "Aaryansh Sharma",
    course: "Power BI (Industrial Training)",
    achievement: "Interactive Dashboards & KPI Reports",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM.jpeg",
    quote:
      "The practical skills and knowledge you shared have provided us with a valuable learning experience that will greatly benefit our academic and professional growth.",
    verified: true,
    batch: "Power BI Industrial Training",
    rating: 5,
  },
  {
    id: "t-ayankhan",
    name: "Ayan Khan",
    course: "Power BI Dashboards & Reports",
    achievement: "Data Modeling & Visualization Certified",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.23.54 PM.jpeg",
    quote:
      "This training truly helped me grow, gain confidence, and believe in my own potential. Practical datasets and patient doubt resolution made all the difference.",
    verified: true,
    batch: "Power BI Industrial Training",
    rating: 5,
  },
  {
    id: "t-prachi",
    name: "Prachi",
    course: "Corporate & Professional Workshop",
    achievement: "Workshop Coordination & Active Learner",
    city: "Chandigarh",
    image: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.33.43 PM.jpeg",
    quote:
      "A heartfelt thank you to Deepika Ma'am and the entire SKD team for this wonderful opportunity. It was a lovely journey, and I'm grateful to have been a part of it. Looking forward to more such opportunities!",
    verified: true,
    batch: "Professional Workshop Cohort",
    rating: 5,
  },
  {
    id: "t-abhiraj",
    name: "Abhiraj Bakshi",
    course: "ACCA (Global Chartered Accountant)",
    achievement: "Featured Video Testimonial & ACCA Scholar",
    city: "Chandigarh",
    image: "/assets/reviews/f7b828d6-a87c-42c1-8d52-76ac53e971f4.png",
    quote:
      "SKD Group of Institutions gave me the exact foundation I needed for ACCA. Learning from qualified mentors with real CBE mock exam platforms built complete confidence for my examinations.",
    verified: true,
    batch: "ACCA Cohort",
    rating: 5,
  },
  {
    id: "t-anahita",
    name: "Anahita Singh",
    course: "ACCA (Global Chartered Accountant)",
    achievement: "Featured Video Testimonial & ACCA Scholar",
    city: "Chandigarh",
    image: "/assets/results/12d5089e-a65b-45a2-881c-3e7ab19cdccb.png",
    quote:
      "The faculty at SKD breaks down the syllabus into manageable milestones. The personal guidance and doubt sessions after every lecture made a massive difference to my preparation.",
    verified: true,
    batch: "ACCA Cohort",
    rating: 5,
  },
  {
    id: "t-harsimar",
    name: "Harsimar Kaur",
    course: "ACCA (Global Chartered Accountant)",
    achievement: "Featured Video Testimonial & ACCA Scholar",
    city: "Chandigarh",
    image: "/assets/results/124f5707-11e4-41ed-9e3c-dfa29fae004e.png",
    quote:
      "Having mentors who are practicing CAs and ACCA members means you don't just study for the test—you learn how corporate accounting and international audit really work.",
    verified: true,
    batch: "ACCA Cohort",
    rating: 5,
  },
  {
    id: "t-jasmine",
    name: "Jasmine Kaur",
    course: "ACCA (Global Chartered Accountant)",
    achievement: "Featured Video Testimonial & ACCA Scholar",
    city: "Chandigarh",
    image: "/assets/results/187e7fbd-dbbf-4fb9-ad04-8b804b08cd4a.png",
    quote:
      "The environment at Godrej Eternia campus is motivating and focused. High-speed computer labs and official CBE exam simulation helped me clear my papers comfortably.",
    verified: true,
    batch: "ACCA Cohort",
    rating: 5,
  },
  {
    id: "t-pranjal",
    name: "Pranjal",
    course: "ACCA (Global Chartered Accountant)",
    achievement: "Featured Video Testimonial & ACCA Scholar",
    city: "Chandigarh",
    image: "/assets/results/21581df1-bbb3-4253-9c19-06955675ad67.png",
    quote:
      "SKD's disciplined timetable and regular mock examinations took the stress away from my exams. I highly recommend SKD to anyone pursuing global finance careers.",
    verified: true,
    batch: "ACCA Cohort",
    rating: 5,
  },
];

export interface ExamResultRecord {
  id: string;
  examSession: string;
  qualification: string;
  passPercentage: string;
  highlight: string;
  topScorers: {
    paper: string;
    studentName: string;
    score: string;
    image?: string;
  }[];
}

export const resultsData: ExamResultRecord[] = [
  {
    id: "res-1",
    examSession: "October 2026 ACCA Exam Window",
    qualification: "ACCA Global Examination",
    passPercentage: "86.4% Batch Pass Rate",
    highlight: "Students achieved outstanding clearances in Financial Accounting (FA) and Strategic Business Reporting, significantly outperforming worldwide averages.",
    topScorers: [
      { paper: "Financial Accounting (FA)", studentName: "Arshpreet Kaur", score: "Outstanding Marks Clearance", image: "/assets/results/Enhanced_Photo_06.jpg" },
      { paper: "Financial Accounting (FA)", studentName: "Hitesh Goyal", score: "High Marks Clearance", image: "/assets/results/Enhanced_Photo_09.jpg" },
      { paper: "Strategic Business Reporting (SBR)", studentName: "Arshpreet Kaur", score: "First Attempt Clearance", image: "/assets/results/12d5089e-a65b-45a2-881c-3e7ab19cdccb.png" },
      { paper: "Audit & Assurance (AA)", studentName: "Divya M.", score: "84 Marks (Exemption)" },
    ],
  },
  {
    id: "res-2",
    examSession: "US CMA Examination Window",
    qualification: "US CMA (IMA USA)",
    passPercentage: "88.2% Pass Rate",
    highlight: "Students completed both parts within an average duration of 7.5 months with thorough Gleim & Wiley simulation coaching.",
    topScorers: [
      { paper: "Part 1 (Financial Planning & Analytics)", studentName: "Ankit R.", score: "430 / 500" },
      { paper: "Part 2 (Strategic Financial Management)", studentName: "Sneha B.", score: "420 / 500" },
    ],
  },
  {
    id: "res-3",
    examSession: "ICAI CA Intermediate Session",
    qualification: "Chartered Accountancy",
    passPercentage: "74% Group Clearance Rate",
    highlight: "High scores attained in Advanced Accounting and Corporate Laws with zero syllabus backlogs.",
    topScorers: [
      { paper: "Advanced Accounting", studentName: "Gurpreet K.", score: "82 Marks (Exemption)" },
      { paper: "Corporate and Other Laws", studentName: "Rahul T.", score: "77 Marks (Exemption)" },
    ],
  },
];
