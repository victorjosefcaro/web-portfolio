// Define the TypeScript interface for portfolio items
export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  skills: string[];
}

// Define portfolio items data
export const portfolioItems: PortfolioItem[] = [
  {
    title: "resume-tailor",
    description:
      "An intelligent resume tailoring app built with React and Vite, optimizing resumes for job applications by suggesting personalized changes and ATS-friendly keywords.",
    imageUrl: "/images/resume-tailor.webp",
    link: "https://github.com/victorjosefcaro/resume-tailor",
    skills: ["HTML", "CSS", "React", "Material UI", "Vite"],
  },
  {
    title: "notes-to-quiz",
    description:
      "An AI-powered React + Vite app that converts study notes into interactive quizzes. It helps users easily create, manage, and take quizzes, making learning more engaging and effective.",
    imageUrl: "/images/notes-to-quiz.webp",
    link: "https://github.com/victorjosefcaro/notes-to-quiz",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Vite"],
  },
  {
    title: "ROQS",
    description:
      "Restaurant Ordering and Queuing System - a web app that streamlines restaurant operations with tools for orders, queues, tables, inventory, and staff management.",
    imageUrl: "/images/roqs.webp",
    link: "https://github.com/victorjosefcaro/ROQS",
    skills: ["SQL", "PHP", "HTML", "CSS", "Bootstrap"],
  },
]; 