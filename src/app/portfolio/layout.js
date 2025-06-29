import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Portfolio - Julius Peter Ntale",
  description: "Explore the portfolio of Julius Peter Ntale featuring innovative web development projects built with React, Next.js, TypeScript and modern technologies. See real-world applications and creative solutions.",
  keywords: ["Julius Ntale Portfolio", "React Projects", "Next.js Projects", "Web Development Portfolio", "Tanzania Developer Projects"],
  url: "https://ntale-portfolio.vercel.app/portfolio"
});

export default function PortfolioLayout({ children }) {
  return children;
}
