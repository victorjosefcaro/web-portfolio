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
    title: "Core Technologies",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-200",
    skills: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "TypeScript", icon: "fas fa-code" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-200",
    skills: [
      { name: "Astro", icon: "fas fa-rocket" },
      { name: "React", icon: "fab fa-react" },
      { name: "Next.js", icon: "fas fa-forward" },
      { name: "Vue.js", icon: "fab fa-vuejs" },
    ],
  },
  {
    title: "Styling & UI/UX",
    bgColor: "bg-orange-100 dark:bg-orange-900",
    textColor: "text-orange-800 dark:text-orange-200",
    skills: [
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
      { name: "Material UI", icon: "fas fa-boxes-stacked" },
    ],
  },
  {
    title: "Build Tools & Version Control",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-200",
    skills: [
      { name: "Vite", icon: "fas fa-bolt" },
      { name: "npm", icon: "fab fa-npm" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "ESLint", icon: "fas fa-check-circle" },
    ],
  },
]; 