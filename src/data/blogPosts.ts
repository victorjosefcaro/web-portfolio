// Define TypeScript interface for blog posts
export interface BlogPost {
  title: string;
  imageUrl: string;
  date: string;
  content: string;
  slug: string;
}

// Updated blog posts data
export const blogPosts: BlogPost[] = [
  {
    title: "Mastering Paddle: Crafting a Payment Link Page with an ADR",
    imageUrl: "/images/paddle.webp",
    date: "Feb 19, 2025",
    content:
      "A deep dive into creating a payment link page using Paddle's API, focusing on the architecture and design decisions.",
    slug: "mastering-paddle",
  },
  {
    title: "Whitelisting with Rust: Diving Deep into Language Detection",
    imageUrl: "/images/rust.webp",
    date: "Mar 6, 2025",
    content:
      "Exploring the intricacies of language detection using Rust, with a focus on performance and accuracy.",
    slug: "whitelisting-with-rust",
  },
  {
    title: "Testing Slack Bots: My SeleniumBase Automation Adventure",
    imageUrl: "/images/seleniumbase.webp",
    date: "Mar 21, 2025",
    content:
      "A comprehensive guide on using SeleniumBase to automate testing for Slack bots, ensuring reliability and performance.",
    slug: "testing-slack-bots",
  },
  {
    title: "UI/UX Workshop Highlights: A Personal Reflection",
    imageUrl: "/images/uiux.webp",
    date: "Mar 24, 2025",
    content:
      "Reflecting on the key takeaways from a recent UI/UX workshop, focusing on design principles and user-centered design.",
    slug: "uiux-workshop-highlights",
  },
  {
    title: "Astro and Tailwind: Building My Personal Web Portfolio",
    imageUrl: "/images/astro.webp",
    date: "May 3, 2025",
    content:
      "A personal journey of building a web portfolio using Astro and Tailwind CSS, highlighting the benefits of these technologies.",
    slug: "astro-and-tailwind",
  },
]; 