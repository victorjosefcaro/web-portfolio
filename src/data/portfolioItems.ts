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
    title: "notes-to-quiz",
    description:
      "An AI-powered React + Vite app that converts study notes into interactive quizzes. It helps users easily create, manage, and take quizzes, making learning more engaging and effective.",
    imageUrl: "/images/notes-to-quiz.webp",
    link: "https://github.com/victorjosefcaro/notes-to-quiz",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Vite", "VS Code"],
  },
  {
    title: "tomato-ripeness-analyzer",
    description:
      "A machine learning tool designed to classify the ripeness stages of hybrid tomatoes from images, utilizing K-Nearest Neighbors (KNN) and Support Vector Machine (SVM) algorithms.",
    imageUrl: "/images/tomato-ripeness-analyzer.webp",
    link: "https://github.com/victorjosefcaro/tomato-ripeness-analyzer",
    skills: ["Python", "VS Code", "scikit-learn", "OpenCV"],
  },
  {
    title: "ROQS",
    description:
      "Restaurant Ordering and Queuing System - a web app that streamlines restaurant operations with tools for orders, queues, tables, inventory, and staff management.",
    imageUrl: "/images/roqs.webp",
    link: "https://github.com/victorjosefcaro/ROQS",
    skills: ["SQL", "PHP", "HTML", "CSS", "Bootstrap", "VS Code"],
  },
  {
    title: "numerical-analysis-toolkit",
    description:
      "A toolkit offering interactive tools and resources for interpolation, integration, root-finding, and error analysis methods.",
    imageUrl: "/images/numerical-analysis-toolkit.webp",
    link: "https://github.com/victorjosefcaro/numerical-analysis-toolkit",
    skills: ["Java", "Python", "C#", "NetBeans", "VS Code", "Visual Studio"],
  },
  {
    title: "nurturing-love",
    description:
      "A visual novel made using Ren'Py, it uses data structures and algorithms to create a branching narrative.",
    imageUrl: "/images/nurturing-love.webp",
    link: "https://github.com/victorjosefcaro/nurturing-love",
    skills: ["Python", "VS Code"],
  },
  {
    title: "PlantCycleExplorer",
    description:
      "An educational app teaching plant life cycles through interactive lessons, quizzes, and visual aids.",
    imageUrl: "/images/PlantCycleExplorer.webp",
    link: "https://github.com/victorjosefcaro/PlantCycleExplorer",
    skills: ["C#", "Visual Studio"],
  },
]; 