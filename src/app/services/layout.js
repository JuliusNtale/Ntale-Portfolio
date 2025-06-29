import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Services & Pricing - Professional Web Development & Media Production",
  description: "Affordable web development, mobile apps, and media production services in Tanzania. Flexible pricing with TSH/USD payment options and milestone-based payments.",
  keywords: [
    "Web Development Services Tanzania",
    "Freelance Developer Dar es Salaam", 
    "Website Design Prices Tanzania",
    "Mobile App Development Tanzania",
    "Media Production Services",
    "Affordable Web Developer",
    "React Developer for Hire",
    "Full Stack Developer Pricing"
  ]
});

export default function ServicesLayout({ children }) {
  return children;
}
