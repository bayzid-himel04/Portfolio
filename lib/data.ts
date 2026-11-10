export const navLinks = [
  { label: "Experience", href: "#experience", code: "01" },
  { label: "Products", href: "#products", code: "02" },
  { label: "About", href: "#about", code: "03" },
  { label: "Skills", href: "#skills", code: "04" },
  { label: "Certifications", href: "#certifications", code: "05" },
  { label: "Contact", href: "#contact", code: "06" },
];

export const personalInfo = {
  name: "Bayzid Himel",
  title: "SecDev Lead | Security Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "bayzidhimel04@gmail.com",
  phone: "+88 01622821469",
  linkedin: "https://www.linkedin.com/in/bayzidhimel/",
  github: "https://github.com/bayzid-himel04",
  objective:
    "Cybersecurity product engineer and SecDev Lead with experience in security software development, application security, defensive security, and cybersecurity automation. Co-developing security platforms spanning phishing simulation, continuous penetration testing, vulnerability lifecycle management, and security-focused internet asset discovery.",
  objectivePart2:
    "Experienced in building web applications, REST APIs, authentication systems, and security workflows using modern JavaScript and Python technologies. Interested in Application Security, DevSecOps, Security Engineering, and cybersecurity research, with a focus on building practical security products that improve organizational cyber resilience.",
};

export const workExperience = [
  {
    company: "Penough Ltd.",
    location: "Bangladesh",
    role: "SecDev Lead",
    period: "November 2023 – Present",
    current: true,
    products: [
      { name: "PhishTop", url: "https://phishtop.com" },
      { name: "BugValluk", url: "https://bugvalluk.com" },
      { name: "Surveiller.io", url: "https://surveiller.io" },
    ],
    responsibilities: [
      "Lead the development of cybersecurity products, translating security requirements into practical software features and workflows.",
      "Design and develop security-focused web applications, backend services, REST APIs, authentication mechanisms, and vulnerability management workflows.",
      "Drive development across three cybersecurity products: PhishTop, BugValluk, and Surveiller.io.",
      "Apply secure software development practices, including authentication and authorization controls, API security, vulnerability validation, and secure coding principles.",
      "Develop automation for security assessment, vulnerability tracking, remediation workflows, and security reporting.",
      "Collaborate with security researchers and software engineers to improve product functionality, security, and maintainability.",
      "Contribute to application security testing, security issue remediation, and the integration of security practices throughout the software development lifecycle.",
    ],
  },
  {
    company: "FSN Solutions Ltd.",
    location: "Uttara, Dhaka",
    role: "Junior Cyber Security Engineer (SOC)",
    period: "March 2023 – October 2023",
    current: false,
    products: [] as { name: string; url: string }[],
    responsibilities: [
      "Monitored SIEM alerts and investigated potential security incidents.",
      "Performed log analysis, threat investigation, and incident response activities to identify suspicious behavior.",
      "Conducted vulnerability assessments and prepared security assessment reports.",
      "Supported security monitoring operations, security tool management, and compliance-related activities.",
      "Assisted with digital forensic investigations and malware analysis.",
    ],
  },
];

export const products = [
  {
    name: "PhishTop",
    tagline: "Security Awareness & Phishing Simulation Platform",
    website: "https://phishtop.com",
    domain: "phishtop.com",
    image: "/products/phishtop.png",
    description:
      "A security awareness and phishing simulation platform designed to help organizations assess user awareness and strengthen their human security defenses.",
    points: [
      "Simulation workflows for email, QR codes, calendar invitations, and public-event-themed scenarios.",
      "Campaign management and simulation workflows.",
      "Security awareness assessment and reporting.",
    ],
  },
  {
    name: "BugValluk",
    tagline: "Continuous Penetration Testing & PenOps Platform",
    website: "https://bugvalluk.com",
    domain: "bugvalluk.com",
    image: "/products/bugvalluk.png",
    description:
      "A continuous penetration testing platform designed to streamline security assessments and vulnerability lifecycle management.",
    points: [
      "Real-time vulnerability reporting, evidence management, and risk prioritization.",
      "Remediation tracking, verification, and retesting workflows.",
      "Centralized dashboards supporting collaboration between security researchers and engineering teams.",
      "End-to-end PenOps: scoping, discovery, remediation, verification, and security reporting.",
    ],
  },
  {
    name: "Surveiller.io",
    tagline: "Security Search & Internet Asset Discovery",
    website: "https://surveiller.io",
    domain: "surveiller.io",
    image: "/products/surveiller.png",
    description:
      "A security-focused search platform that helps users explore internet-facing services and discover security-relevant information about exposed assets.",
    points: [
      "React-based frontend with a Node.js/Express backend and API-driven search.",
      "Authentication workflows, search interface development, and backend integration.",
      "Data presentation for security-focused discovery and research.",
    ],
  },
  {
    name: "WaapiMotion",
    tagline: "WhatsApp Automation & Messaging Platform",
    website: "https://www.waapimotion.com",
    domain: "waapimotion.com",
    image: "/products/waapimotion.png",
    description:
      "A WhatsApp automation and marketing platform for high-volume conversational messaging, built on the official Meta WhatsApp Cloud API.",
    points: [
      "Automated broadcast campaigns, template management, and interactive WhatsApp Flows.",
      "Multi-agent shared inbox with real-time two-way chat and agent assignment.",
      "1-click Meta Embedded Signup, webhook sync, and delivery health monitoring.",
    ],
  },
];

export const education = {
  institution: "Independent University, Bangladesh",
  degree: "Bachelor of Science in Computer Science & Engineering",
  period: "2018 – 2024",
  location: "Dhaka, Bangladesh",
};

export const certifications = [
  {
    name: "ISO/IEC 27001:2022 Lead Auditor",
    issuer: "Mastermind Assurance",
    date: "May 2025",
    badge: "ISO",
  },
  {
    name: "CASA – Certified API Security Analyst",
    issuer: "APISEC University",
    date: "April 2025",
    badge: "CASA",
  },
  {
    name: "ACP – APISEC Certified Practitioner",
    issuer: "APISEC University",
    date: "April 2025",
    badge: "ACP",
  },
  {
    name: "CAP – Certified AppSec Practitioner",
    issuer: "The SecOps Group",
    date: "September 2024",
    badge: "CAP",
  },
  {
    name: "C3SA – Certified Cyber Security Analyst",
    issuer: "CyberWarFare Labs",
    date: "July 2024",
    badge: "C3SA",
  },
  {
    name: "CNSP – Certified Network Security Practitioner",
    issuer: "The SecOps Group",
    date: "June 2024",
    badge: "CNSP",
  },
];

export const skills = [
  {
    category: "Application Security",
    items: ["Secure Coding", "Secure Code Review", "Threat Modeling", "Authentication & Authorization", "API Security", "Vulnerability Assessment"],
  },
  {
    category: "Defensive Security",
    items: ["SIEM", "Security Monitoring", "Threat Detection", "Incident Response", "Log Analysis", "Vulnerability Management", "Digital Forensics"],
  },
  {
    category: "Security Platforms & Threat Intel",
    items: ["Wazuh", "TheHive", "Cortex", "Shuffle", "OpenCTI", "MITRE ATT&CK", "YARA Rules", "IOC Analysis"],
  },
  {
    category: "Languages & Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend, APIs & Data",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth2", "PostgreSQL", "MongoDB", "Elasticsearch"],
  },
  {
    category: "DevSecOps & Tooling",
    items: ["Git", "GitHub", "Docker", "Linux", "Secure SDLC", "CI/CD Fundamentals", "Postman", "Apache JMeter"],
  },
];

export const personal = {
  languages: ["Bangla (Native)", "English (Professional Working Proficiency)"],
  interests: [
    "Cybersecurity Product Engineering",
    "Security Research",
    "Application Security",
    "DevSecOps",
    "Secure Software Design",
    "Digital Forensics",
  ],
};
