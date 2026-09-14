export const profile = {
  name: "Rakpong Nagosa",
  headline: "Backend Developer · Full Stack Developer · Lead Developer",
  phone: "095-295-2788",
  email: "Farmrakpong0@gmail.com",
  location: "Samut Prakan, Thailand",
  summary:
    "Lead Programmer with over 5 years of professional software development experience, specializing in backend development, API design, database management, CI/CD, cloud deployment, and team leadership. Experienced with Vue.js, React.js, Next.js, Express.js, NestJS, Laravel, Golang, Microsoft SQL Server, Firebase, GitLab CI/CD, and Google Cloud Platform. Skilled in client requirement gathering, architecture design, code review, task planning, and mentoring developers.",
};

export const preferences = [
  {
    label: "Target Roles",
    value: "Backend Developer / Full Stack Developer / Lead Developer",
  },
  { label: "Expected Salary", value: "THB 40,000 / month" },
  { label: "Employment", value: "Full-time" },
  { label: "Availability", value: "Within 1 month" },
  { label: "Preferred Location", value: "Bangkok Metropolitan Region" },
  { label: "Note", value: "Not interested in insurance sales" },
];

export const skillGroups = [
  {
    title: "Backend",
    items: ["NestJS", "Express.js", "Laravel", "PHP", "REST API", "Golang"],
  },
  {
    title: "Frontend",
    items: [
      "Vue.js",
      "Nuxt.js",
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    title: "Database",
    items: ["Microsoft SQL Server", "SQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "GitLab",
      "Docker",
      "GitLab CI/CD",
      "Google Cloud Platform (GCP)",
      "Firebase",
    ],
  },
];

export const experience = [
  {
    company: "Auto Fast Co., Ltd.",
    role: "Lead Programmer / Team Lead",
    period: "October 2020 – Present",
    location: "Bangkok, Thailand",
    current: true,
    bullets: [
      "Develop and maintain internal systems using Vue.js, Nuxt.js, React.js and Next.js for frontend development and Express.js / NestJS for backend development.",
      "Build the TyrePlus promotion system, which breaks down the promotions running in each month so the business can review and analyse the monthly line-up.",
      "Build a point-of-sale system for tyre shops, covering sales at the counter and the day-to-day running of the store.",
      "Build the TyrePlus e-learning system, used to set up and run the tests that assess shop staff.",
      "Build a used-car inspection system that records the condition check carried out on each vehicle.",
      "Design, develop, and improve APIs and business logic to support system requirements.",
      "Design and manage Microsoft SQL Server databases, including writing and optimizing SQL queries.",
      "Use GitLab for version control, source code management, and development team collaboration.",
      "Implement GitLab CI/CD pipelines for automated build, test, and deployment processes.",
      "Deploy and maintain applications on Google Cloud Platform (GCP).",
      "Analyze and resolve bugs and improve overall system performance.",
      "Work directly with clients to gather requirements, analyze business needs, and plan development work.",
      "Plan projects, assign tasks, and monitor team progress to ensure delivery within deadlines.",
      "Perform code reviews and provide technical guidance to maintain source code quality and standards.",
      "Participate in architecture design and determine technical approaches that match project requirements.",
    ],
  },
  {
    company: "Creative Online Co., Ltd.",
    role: "Programmer",
    period: "October 2019 – October 2020",
    location: "Bangkok, Thailand",
    current: false,
    bullets: [
      "Developed business applications for a fertilizer manufacturing company using Vue.js and Laravel.",
      "Built invoice and receipt, inventory, credit management, sales reporting, sales representative reporting, and commission systems.",
      "Developed the backend administration system for an agricultural fertilizer and pesticide application using Nuxt.js and Firebase.",
    ],
  },
  {
    company: "Khon Kaen Rajanagarindra Psychiatric Hospital",
    role: "IT Officer Intern",
    period: "December 2017 – March 2018",
    location: "Khon Kaen, Thailand",
    current: false,
    bullets: [
      "Managed, maintained, and categorized patient information using MySQL.",
      "Developed and maintained web applications.",
      "Performed computer maintenance and network system support.",
    ],
  },
];

export const projects = [
  {
    title: "TyrePlus Promotion System",
    context: "Auto Fast Co., Ltd.",
    description:
      "Promotion management system built for TyrePlus. It breaks down which promotions are running in each month, so the team can review and analyse the monthly promotion line-up in one place instead of tracking campaigns by hand.",
    stack: ["Vue.js", "NestJS", "Microsoft SQL Server"],
  },
  {
    title: "Autofast POS System",
    context: "Auto Fast Co., Ltd.",
    description:
      "Point-of-sale system for tyre shops, covering sales at the counter and the day-to-day running of the store.",
    stack: ["Vue.js", "NestJS", "Express.js", "Microsoft SQL Server"],
  },
  {
    title: "TyrePlus E-Learning",
    context: "Auto Fast Co., Ltd.",
    description:
      "E-learning system for TyrePlus shop staff, used to set up and run the tests that assess them.",
    stack: ["Vue.js", "NestJS", "Microsoft SQL Server"],
  },
  {
    title: "Used Car Inspection System",
    context: "Auto Fast Co., Ltd.",
    description:
      "Inspection system for second-hand cars, used to record the condition check carried out on each vehicle and keep that assessment on file.",
    stack: ["Next.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "Document Recording & Database Management",
    description:
      "Designed and developed a web application for document recording and database management using MySQL.",
    stack: ["MySQL", "PHP", "Web"],
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Sakon Nakhon Rajabhat University",
  graduated: "2018",
  gpa: "2.48",
};

export const certifications = [
  {
    title: "MikroTik Training Sessions",
    issuer: "Sakon Nakhon Rajabhat University",
    date: "October 2017",
  },
];

export const languages = [
  { name: "Thai", detail: "Speaking – Excellent · Reading – Good · Writing – Good" },
  { name: "English", detail: "Speaking – Fair · Reading – Fair · Writing – Fair" },
];

export const additional = [
  { label: "Phone", value: profile.phone },
  { label: "Email", value: profile.email },
  { label: "Typing speed", value: "Thai 45 WPM · English 60 WPM" },
  { label: "Nationality", value: "Thai" },
  { label: "Date of birth", value: "20 December 1995" },
  { label: "Marital status", value: "Single" },
  { label: "Height / Weight", value: "175 cm / 85 kg" },
  { label: "Military service", value: "Completed" },
  { label: "Personal vehicles", value: "Car and motorcycle (drives motorcycle)" },
  {
    label: "Current address",
    value:
      "Xim Rama 3-Suksawat, 162/398 Suksawat Road, Bang Phueng, Phra Pradaeng, Samut Prakan 10130, Thailand",
  },
];

export const hero = {
  eyebrow: profile.name,
  headline: "Lead Developer",
  tagline:
    "Backend, APIs, databases and the people who ship them. Five years of building systems that hold up in production.",
};

export const stats = [
  { value: "5+", unit: "years", label: "Professional software development" },
  { value: "2020", unit: "since", label: "Leading and mentoring a development team" },
  { value: "23", unit: "technologies", label: "Across backend, frontend, database and cloud" },
];

export const highlights = [
  {
    title: "Backend & API design",
    body: "REST APIs and business logic built with NestJS, Express.js and Laravel, designed to fit each system's requirements.",
  },
  {
    title: "Databases that scale",
    body: "Microsoft SQL Server schema design plus query writing and optimisation for reporting-heavy systems.",
  },
  {
    title: "CI/CD on Google Cloud",
    body: "GitLab pipelines for automated build, test and deploy, running on Google Cloud Platform.",
  },
];

export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#specs", label: "Specs" },
];
