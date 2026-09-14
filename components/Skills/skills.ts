export const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and maintainable web interfaces.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Mobile",
    description: "Creating practical cross-platform mobile experiences.",
    skills: ["React Native", "React Navigation", "React Native CLI"],
  },
  {
    number: "03",
    title: "State Management",
    description: "Managing application state with reliable patterns.",
    skills: ["Redux", "MobX", "Context API"],
  },
  {
    number: "04",
    title: "Backend & APIs",
    description: "Working with APIs, authentication, and connected services.",
    skills: ["REST APIs", "Axios", "Firebase", "Postman"],
  },
  {
    number: "05",
    title: "Tools",
    description: "Using modern tools for development and collaboration.",
    skills: ["Git", "GitHub", "Node.js", "Yarn"],
  },
];

export const nodes = [
  { left: "7%", top: "18%", type: "purple", delay: "0s" },
  { left: "20%", top: "10%", type: "cyan", delay: "1.5s" },
  { left: "32%", top: "24%", type: "purple", delay: "2.5s" },
  { left: "47%", top: "12%", type: "cyan", delay: "0.8s" },
  { left: "61%", top: "22%", type: "purple", delay: "2s" },
  { left: "76%", top: "11%", type: "cyan", delay: "1s" },
  { left: "91%", top: "25%", type: "purple", delay: "2.8s" },

  { left: "12%", top: "48%", type: "cyan", delay: "2s" },
  { left: "28%", top: "58%", type: "purple", delay: "0.5s" },
  { left: "43%", top: "45%", type: "cyan", delay: "1.8s" },
  { left: "58%", top: "62%", type: "purple", delay: "2.7s" },
  { left: "73%", top: "48%", type: "cyan", delay: "0.7s" },
  { left: "88%", top: "59%", type: "purple", delay: "2.2s" },

  { left: "8%", top: "83%", type: "purple", delay: "1.2s" },
  { left: "24%", top: "91%", type: "cyan", delay: "2.5s" },
  { left: "41%", top: "79%", type: "purple", delay: "0.3s" },
  { left: "57%", top: "91%", type: "cyan", delay: "1.7s" },
  { left: "74%", top: "82%", type: "purple", delay: "2.4s" },
  { left: "91%", top: "90%", type: "cyan", delay: "0.9s" },
];

export const connections = [
  ["7%", "18%", "20%", "10%"],
  ["20%", "10%", "32%", "24%"],
  ["32%", "24%", "47%", "12%"],
  ["47%", "12%", "61%", "22%"],
  ["61%", "22%", "76%", "11%"],
  ["76%", "11%", "91%", "25%"],

  ["12%", "48%", "28%", "58%"],
  ["28%", "58%", "43%", "45%"],
  ["43%", "45%", "58%", "62%"],
  ["58%", "62%", "73%", "48%"],
  ["73%", "48%", "88%", "59%"],

  ["8%", "83%", "24%", "91%"],
  ["24%", "91%", "41%", "79%"],
  ["41%", "79%", "57%", "91%"],
  ["57%", "91%", "74%", "82%"],
  ["74%", "82%", "91%", "90%"],

  ["20%", "10%", "43%", "45%"],
  ["47%", "12%", "58%", "62%"],
  ["61%", "22%", "73%", "48%"],
  ["28%", "58%", "41%", "79%"],
  ["58%", "62%", "74%", "82%"],
];
