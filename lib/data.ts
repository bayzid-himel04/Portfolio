export const personalInfo = {
  name: "Bayzid Himel",
  title: "Co-Founder & SecDev Lead — Penough",
  location: "Dhaka, Bangladesh",
  email: "bayzidhimel04@gmail.com",
  phone: "+88 01622821469",
  linkedin: "https://www.linkedin.com/in/bayzidhimel/",
  github: "https://github.com/bayzid-himel04",
  objective:
    "Security Software Engineer with experience in secure web application development, defensive security, and cybersecurity automation. Passionate about building security-focused platforms that improve vulnerability management, security monitoring, and threat detection.",
  objectivePart2:
    "Experienced in integrating security throughout the Secure Software Development Life Cycle (SSDLC) by implementing secure coding practices, application security testing, and automation. Seeking opportunities to design innovative security products that strengthen organizational cyber resilience while continuously advancing expertise in Application Security, DevSecOps, and Defensive Security.",
};

export const workExperience = [
  {
    company: "Penough Ltd.",
    location: "Bangladesh",
    role: "SecDev Lead",
    period: "November 2023 – Present",
    current: true,
    responsibilities: [
      "Designing and developing security-focused web applications and cybersecurity platforms using modern web technologies.",
      "Building defensive security solutions for vulnerability management, security monitoring, and incident response workflows.",
      "Developing secure REST APIs and implementing authentication, authorization, and secure coding practices following OWASP standards.",
      "Integrating security throughout the Secure Software Development Life Cycle (SSDLC), including secure code reviews, application security testing, and automated validation.",
      "Developing automation workflows for vulnerability assessment, reporting, and remediation.",
      "Collaborating with software engineers and security researchers to build scalable cybersecurity products.",
      "Performing application security assessments, vulnerability validation, and remediation of identified security issues.",
    ],
  },
  {
    company: "FSN Solutions Ltd.",
    location: "Uttara, Dhaka",
    role: "Junior Cyber Security Engineer (SOC)",
    period: "March 2023 – October 2023",
    current: false,
    responsibilities: [
      "Monitored SIEM alerts and investigated security incidents.",
      "Performed threat analysis, incident response, and log analysis to detect malicious activities.",
      "Conducted vulnerability assessments and generated security reports.",
      "Managed security monitoring tools and supported compliance initiatives.",
      "Assisted in digital forensic investigations and malware analysis.",
    ],
  },
];

export const education = {
  institution: "Independent University, Bangladesh",
  degree: "Bachelor of Science in Computer Science & Engineering",
  period: "2018 – 2024",
  location: "Dhaka, Bangladesh",
  cgpa: "3.22",
};

export const certifications = [
  {
    name: "ISO/IEC 27001:2022 Lead Auditor",
    issuer: "Mastermind Assurance",
    date: "May 2025",
    badge: "ISO",
    color: "cyan",
  },
  {
    name: "CASA – Certified API Security Analyst",
    issuer: "APISEC University",
    date: "Apr 2025",
    badge: "CASA",
    color: "green",
  },
  {
    name: "ACP – APISEC Certified Practitioner",
    issuer: "APISEC University",
    date: "Apr 2025",
    badge: "ACP",
    color: "green",
  },
  {
    name: "CAP – Certified AppSec Practitioner",
    issuer: "The SecOps Group",
    date: "Sep 2024",
    badge: "CAP",
    color: "magenta",
  },
  {
    name: "C3SA – Certified Cyber Security Analyst",
    issuer: "CyberWarFare Labs",
    date: "Jul 2024",
    badge: "C3SA",
    color: "cyan",
  },
  {
    name: "CNSP – Certified Network Security Practitioner",
    issuer: "The SecOps Group",
    date: "Jun 2024",
    badge: "CNSP",
    color: "magenta",
  },
];

export const skills = [
  {
    category: "Application Security",
    color: "cyan" as const,
    items: ["OWASP Top 10", "Secure Coding", "Secure Code Review", "Threat Modeling", "Authentication & Authorization", "API Security"],
  },
  {
    category: "Defensive Security",
    color: "green" as const,
    items: ["SIEM", "Security Monitoring", "Threat Detection", "Incident Response", "Log Analysis", "Vulnerability Management"],
  },
  {
    category: "Security Platforms",
    color: "magenta" as const,
    items: ["Wazuh", "Elastic Stack", "TheHive", "Cortex", "Shuffle", "OpenCTI"],
  },
  {
    category: "Threat Intelligence",
    color: "cyan" as const,
    items: ["MITRE ATT&CK Framework", "Sigma Rules", "YARA Rules", "IOC Analysis"],
  },
  {
    category: "Programming Languages",
    color: "green" as const,
    items: ["JavaScript", "TypeScript", "Python", "Bash"],
  },
  {
    category: "Frontend Development",
    color: "magenta" as const,
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    color: "cyan" as const,
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth2"],
  },
  {
    category: "Databases",
    color: "green" as const,
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "DevSecOps",
    color: "magenta" as const,
    items: ["Git", "GitHub", "Docker", "Linux", "Secure SDLC", "CI/CD Fundamentals"],
  },
  {
    category: "Testing & Performance",
    color: "cyan" as const,
    items: ["Apache JMeter", "Postman"],
  },
];

export const achievements = [
  {
    title: "Cybersecurity Platforms",
    desc: "Developing cybersecurity platforms focused on defensive security and vulnerability management.",
  },
  {
    title: "Secure Authentication Systems",
    desc: "Built secure authentication and authorization systems following OWASP Application Security best practices.",
  },
  {
    title: "Automation Workflows",
    desc: "Developed automation workflows for security monitoring, vulnerability validation, and reporting.",
  },
  {
    title: "Vulnerability Remediation",
    desc: "Contributed to secure software development by identifying and remediating application security vulnerabilities.",
  },
];

export const personal = {
  languages: ["Bangla (Native)", "English (Professional Working Proficiency)"],
  interests: ["Application Security", "Defensive Security", "DevSecOps", "Cloud Security", "Cybersecurity Research"],
};
