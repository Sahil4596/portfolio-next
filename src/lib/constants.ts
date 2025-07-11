// src/lib/constants.ts
export const navLinks = [
  { name: "About", path: "about" },
  { name: "Experience", path: "experience" },
  { name: "Projects", path: "projects" },
  { name: "Skills", path: "skills" },
  { name: "Contact", path: "contact" },
];

export const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js", 
  "Tailwind CSS", "Express.js", "MySQL", "PostgreSQL", 
  "Git", "Docker", "AWS"
];

export const projects = [
  {
    title: "Swatchh Bharat Abhiyaan DevOps Support",
    description: "Configured CI/CD pipelines using Jenkins and Docker, automating AWS deployments. Managed large-scale data (100,000+ records, 10M files) with PostgreSQL and implemented robust security measures.",
    tech: ["Linux", "Docker", "Jenkins", "AWS", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Instant ML Deployment",
    description: "Developed a no-code platform for creating, training, and deploying ML models, integrating APIs for seamless data flow and real-time updates.",
    tech: ["React", "Node.js"],
    link: "#"
  },
  {
    title: "Nano Directional Antenna",
    description: "Researched and developed a nano-scale antenna during M.Tech thesis, optimizing signal directionality for next-gen communication.",
    tech: ["Research-based"],
    link: null
  }
];

export const experience = {
  company: "SoftScript Technologies Pvt Ltd",
  role: "Software Developer",
  period: "July 2024 - Present",
  achievements: [
    "Developed a robust admin panel using Next.js with SSR and SSG, improving performance by 40%.",
    "Optimized MySQL database schema for faster query responses and better data organization.",
    "Built scalable RESTful APIs with Express.js, ensuring clear documentation for team collaboration.",
    "Collaborated with cross-functional teams for seamless integration and timely project delivery."
  ]
};

export const contactInfo = [
  {
    label: "Email",
    value: "sahiljhajhariaj@gmail.com",
    link: "mailto:sahiljhajhariaj@gmail.com",
    icon: "✉️"
  },
  {
    label: "Phone",
    value: "+91-8949541361",
    link: "tel:+918949541361",
    icon: "📱"
  },
  {
    label: "LinkedIn",
    value: "sahilraj-3966",
    link: "https://www.linkedin.com/in/sahilraj-3966",
    icon: "👔"
  },
  {
    label: "GitHub",
    value: "Sahil4596",
    link: "https://github.com/Sahil4596",
    icon: "💻"
  }
];