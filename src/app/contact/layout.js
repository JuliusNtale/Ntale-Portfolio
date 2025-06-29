import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact Julius Peter Ntale",
  description: "Get in touch with Julius Peter Ntale for web development projects, collaborations, or media production services. Based in Dar es Salaam, Tanzania. Available for freelance and full-time opportunities.",
  keywords: ["Contact Julius Ntale", "Hire Web Developer Tanzania", "React Developer Contact", "Web Development Services", "Tanzania Developer Contact"],
  url: "https://ntale-portfolio.vercel.app/contact"
});

export default function ContactLayout({ children }) {
  return children;
}
