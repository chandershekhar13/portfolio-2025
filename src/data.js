// src/data.js

export const NAV_LINKS = ["About","Projects","Skills","Achievements","Education","Contact"];

export const PROJECTS = [
  { num:"01", name:"Hierarch-Engine", context:"Adobe Hackathon 2025 — Round 3",
    period:"Jun '25 – Jul '25", tag:"PDF Structure Extraction",
    tech:["Python","PyMuPDF","Docker","Algorithmic Logic"],
    accent:"rgba(99,102,241,0.18)",
    stats:[{v:"92%",l:"Extraction Accuracy"},{v:"40%",l:"Parsing Failures Cut"},{v:"100%",l:"Reproducible Builds"}],
    bullets:[
      "Offline PDF structure engine combining metadata detection with custom font metric analysis.",
      "Dual-layer parsing pipeline with automatic fallback to heuristic typography analysis.",
      "Modelled font size & weight distributions to infer logical document hierarchy levels.",
      "Dockerised for fully reproducible cross-platform execution in hackathon-restricted environments.",
    ],
  },
  { num:"02", name:"Algo Visualizer", context:"Personal Project — Web Architecture",
    period:"Nov '24 – Dec '24", tag:"React · DSA Algorithms",
    tech:["React","JavaScript","HTML/CSS","State Management"],
    accent:"rgba(16,185,129,0.14)",
    stats:[{v:"10+",l:"Algorithms Visualised"},{v:"25%",l:"Lag Reduction"},{v:"200+",l:"Active Users"}],
    bullets:[
      "Interactive web tool visualising core Data Structures & Algorithms in real time.",
      "Optimised React state updates cutting visual lag by 25% and achieving 40% smoother playback.",
      "Clean intuitive UI/UX improving algorithm selection and task completion time by 30%.",
      "Implemented sorting, searching, graph traversal, and tree algorithms with step-by-step animation.",
    ],
  },
];

export const SKILLS_GRID = [
  { cat:"Languages",   items:["Python 3.13","C++","JavaScript","Java","C","PHP"],       accent:"rgba(99,102,241,0.15)" },
  { cat:"Frameworks",  items:["React","Node.js","HTML & CSS","Bootstrap"],              accent:"rgba(16,185,129,0.12)" },
  { cat:"Tools",       items:["MySQL","MongoDB","Docker"],                              accent:"rgba(251,191,36,0.12)" },
  { cat:"Soft Skills", items:["Team Empowerment","Public Speaking","Quick Learning"],   accent:"rgba(244,114,182,0.12)" },
];

export const ACHIEVEMENTS = [
  { title:"Adobe Hackathon 2025 — Distinction", date:"Jul 2025",
    detail:"Advanced to Round 3 in a high-stakes national algorithmic challenge among 2.6L+ students nationwide.",
    icon:"🏆", accent:"rgba(251,191,36,0.12)" },
  { title:"5-Star Gold Badge — Competitive Programming", date:"Oct 2025",
    detail:"Earned 5-Star Gold; 4-Stars across React, Problem-Solving, Java, C and Python on HackerRank.",
    icon:"⭐", accent:"rgba(99,102,241,0.12)" },
];

export const CERTS = [
  { name:"SQL (Intermediate)",                        org:"HackerRank", date:"Oct 2025", accent:"rgba(16,185,129,0.1)" },
  { name:"Master DSA with Java / C++",                org:"W3Schools",  date:"Jul 2025", accent:"rgba(99,102,241,0.1)" },
  { name:"Privacy & Security in Online Social Media", org:"NPTEL",      date:"Apr 2025", accent:"rgba(251,191,36,0.1)" },
];

export const EDU = [
  { degree:"B.Tech — Computer Science & Engineering", school:"Lovely Professional University",
    loc:"Phagwara, Punjab", grade:"CGPA 7.3", period:"Aug 2023 – Present", current:true,  accent:"rgba(99,102,241,0.12)" },
  { degree:"Intermediate (Class XII)", school:"Guru Harkrishan Sr. Sec. Public School",
    loc:"Hanumangarh, Rajasthan", grade:"65%", period:"Apr 2021 – Mar 2023", current:false, accent:"rgba(16,185,129,0.09)" },
  { degree:"Matriculation (Class X)", school:"Little Flower Convent School",
    loc:"Hanumangarh, Rajasthan", grade:"89%", period:"Apr 2014 – Mar 2021", current:false, accent:"rgba(251,191,36,0.09)" },
];