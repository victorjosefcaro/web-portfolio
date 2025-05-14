// Define TypeScript interfaces
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  bgColor: string;
  textColor: string;
  skills: Skill[];
}

// Define skills data, categorized
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-200",
    skills: [
      { name: "Java", icon: "fas fa-mug-hot" },
      { name: "Python", icon: "fab fa-python" },
      { name: "C#", icon: "fab fa-hashtag" },
      { name: "SQL", icon: "fas fa-database" },
      { name: "PHP", icon: "fas fa-server" },
      { name: "JavaScript", icon: "fab fa-js" },
    ],
  },
  {
    title: "Web Development",
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-200",
    skills: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "Laravel", icon: "fas fa-cubes" },
      { name: "Astro", icon: "fas fa-rocket" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
    ],
  },
  {
    title: "Tools & Platforms",
    bgColor: "bg-orange-100 dark:bg-orange-900",
    textColor: "text-orange-800 dark:text-orange-200",
    skills: [
      { name: "VS Code", icon: "fas fa-code" },
      { name: "NetBeans", icon: "fas fa-cube" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Figma", icon: "fas fa-pen" },
      { name: "Canva", icon: "fas fa-palette" },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-200",
    skills: [
      { name: "Power BI", icon: "fas fa-chart-bar" },
      { name: "scikit-learn", icon: "fas fa-chart-line" },
      { name: "PyTorch", icon: "fas fa-fire" },
      { name: "RapidMiner", icon: "fas fa-bolt" },
    ],
  },
]; 