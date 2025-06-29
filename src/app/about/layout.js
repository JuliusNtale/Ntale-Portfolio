import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Julius Peter Ntale",
  description:
    "Learn more about Julius Peter Ntale, a passionate full-stack developer from Tanzania with expertise in React, Next.js, and modern web technologies. Discover his journey, skills, and experience in web development and media production.",
  keywords: [
    "About Julius Ntale",
    "Developer Background",
    "Tanzania Developer",
    "Full Stack Developer Story",
    "React Developer Tanzania",
  ],
  url: "https://ntale-portfolio.vercel.app/about",
});

export default function AboutLayout({ children }) {
  return children;
}
