export type PortfolioMetric = {
  label: string;
  value: number;
  suffix?: string;
};

export type FocusArea = {
  kicker: string;
  title: string;
  description: string;
  highlight: string;
  spotlightColor: string;
};

export type EducationEntry = {
  institution: string;
  credential: string;
  timeframe: string;
  score: string;
  location: string;
};

export type ProjectEntry = {
  title: string;
  timeframe: string;
  teamSize: string;
  mentor: string;
  summary: string;
  bullets: string[];
  stack: string[];
  href: string;
  ctaLabel: string;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const portfolio = {
  name: "Anushka Sahani",
  role: "B.Tech. Information Technology Student",
  location: "Haldia, West Bengal, India",
  hometown: "Mau, Uttar Pradesh, India",
  summary:
    "B.Tech. Information Technology student at Haldia Institute of Technology building responsive web products and steadily growing into machine learning-driven cloud security.",
  availability:
    "Open to internships, collaborative builds, and early product work where frontend craft and problem solving both matter.",
  email: "daho393@gmail.com",
  secondaryEmail: "sahanianushka437@gmail.com",
  phone: "+91 63941 36941",
  alternatePhone: "+91 87650 37696",
  phoneHref: "tel:+916394136941",
  languages: ["English", "Hindi"],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "DBMS",
    "Data Structures",
    "Algorithms",
    "Python",
    "SQL",
    "React.js",
    "Vercel"
  ],
  metrics: [
    { label: "Current CGPA", value: 8.3, suffix: " / 10" },
    { label: "Projects shipped", value: 2, suffix: "+" },
    { label: "Internship role", value: 1 },
    { label: "Core tools in rotation", value: 8, suffix: "+" }
  ] satisfies PortfolioMetric[],
  strengths: [
    {
      kicker: "Frontend craft",
      title: "Clean interfaces with real product intent",
      description:
        "I enjoy turning ideas into responsive pages that feel approachable, structured, and easy to use.",
      highlight:
        "Recent work includes an e-commerce experience with category flows, polished UI, and Vercel deployment.",
      spotlightColor: "rgba(41, 98, 255, 0.18)"
    },
    {
      kicker: "Security lens",
      title: "Growing into ML and cloud security work",
      description:
        "My current internship is helping me bridge model-driven thinking with infrastructure awareness and anomaly detection.",
      highlight:
        "I am building confidence with Python, machine learning concepts, and cloud security fundamentals together.",
      spotlightColor: "rgba(16, 185, 129, 0.18)"
    },
    {
      kicker: "Foundations",
      title: "Comfortable with the basics that scale",
      description:
        "I am strengthening the fundamentals that support better engineering decisions, from DBMS to data structures and algorithms.",
      highlight:
        "That combination helps me learn quickly, debug clearly, and build with more discipline.",
      spotlightColor: "rgba(244, 114, 54, 0.2)"
    }
  ] satisfies FocusArea[],
  experience: {
    company: "ISOEH",
    role: "ML & Cloud Security Intern",
    timeframe: "January 5, 2026 - Present",
    summary:
      "Working at the intersection of data science and infrastructure protection, with a focus on learning how machine learning can support anomaly detection, threat discovery, and automated response in cloud environments.",
    bullets: [
      "Using Python while exploring how model outputs can support cloud security monitoring.",
      "Learning how anomaly detection and threat identification can fit into AWS, Azure, or GCP style workflows.",
      "Building a stronger link between application thinking and infrastructure-level protection."
    ]
  },
  education: [
    {
      institution: "Haldia Institute of Technology",
      credential: "B.Tech. in Information Technology",
      timeframe: "2023 - 2027",
      score: "CGPA: 8.30 / 10",
      location: "Haldia, West Bengal"
    },
    {
      institution: "Rani Laxmibai Memo Sch Ganga Vihar Lucknow UP",
      credential: "12th | CBSE",
      timeframe: "2022",
      score: "Percentage: 93.40 / 100",
      location: "Lucknow, Uttar Pradesh"
    },
    {
      institution: "St Xavier's School Belthara Road Ballia UP",
      credential: "10th | CBSE",
      timeframe: "2020",
      score: "Percentage: 80.83 / 100",
      location: "Belthara Road, Uttar Pradesh"
    }
  ] satisfies EducationEntry[],
  projects: [
    {
      title: "E-commerce Web Application",
      timeframe: "November 12, 2025 - November 22, 2025",
      teamSize: "2",
      mentor: "Self",
      summary:
        "A responsive storefront built to demonstrate product listings, category-based navigation, and a user-friendly shopping flow.",
      bullets: [
        "Built with React.js and deployed on Vercel.",
        "Focused on clean frontend structure, responsive layouts, and practical user interaction patterns.",
        "Used as a hands-on project to strengthen deployment and product UI skills."
      ],
      stack: ["React.js", "HTML", "CSS", "JavaScript", "Vercel"],
      href: "https://codsoft-ecommerce.vercel.app",
      ctaLabel: "Open live demo"
    },
    {
      title: "Safety Tracker Application",
      timeframe: "August 24, 2025 - September 5, 2025",
      teamSize: "2",
      mentor: "Self",
      summary:
        "A personal safety web application designed to improve emergency awareness with a simple and responsive interface.",
      bullets: [
        "Implemented emergency reporting, tracking, and service-oriented pages using HTML, CSS, and JavaScript.",
        "Focused on usability and clarity for fast interaction in high-stress scenarios.",
        "Strengthened practical front-end development and interaction handling."
      ],
      stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      href: "https://github.com/Bhumiagarwal/SafetyTracker",
      ctaLabel: "View repository"
    }
  ] satisfies ProjectEntry[],
  skillGroups: [
    {
      title: "Core stack",
      description: "Technologies I already use to build and ship web interfaces.",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Vercel"]
    },
    {
      title: "Engineering foundations",
      description: "The fundamentals I am sharpening as I grow into stronger software work.",
      items: ["Java", "DBMS", "Data Structures", "Algorithms", "SQL"]
    },
    {
      title: "Current growth areas",
      description: "Topics I am actively exploring through internships and projects.",
      items: ["Python", "Machine Learning", "Cloud Security", "Responsive Design"]
    }
  ]
};

