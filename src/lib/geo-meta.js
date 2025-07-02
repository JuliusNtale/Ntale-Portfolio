// Enhanced meta tags for GEO (Generative Engine Optimization)
export const generateGEOMetaTags = (pageData = {}) => {
  const {
    title = "Julius Peter Ntale - Expert Full Stack Developer Tanzania | React Next.js Specialist",
    description = "Julius Peter Ntale: Expert full-stack developer in Dar es Salaam, Tanzania. Specializing in React, Next.js, TypeScript, e-commerce development. Available globally for web development projects. 5+ years experience, 15+ successful projects.",
    keywords = [
      "Julius Peter Ntale",
      "full stack developer Tanzania", 
      "React developer Dar es Salaam",
      "Next.js expert East Africa",
      "web development Tanzania",
      "e-commerce developer Tanzania",
      "TypeScript specialist Tanzania",
      "freelance developer Tanzania",
      "JavaScript consultant Tanzania",
      "Node.js developer East Africa",
      "MongoDB specialist Tanzania",
      "responsive web design Tanzania",
      "custom web applications Tanzania",
      "digital solutions Tanzania",
      "remote developer East Africa"
    ],
    author = "Julius Peter Ntale",
    canonical = "https://ntale-portfolio.vercel.app",
    image = "https://ntale-portfolio.vercel.app/ntale.png"
  } = pageData;

  return {
    // Primary meta tags
    title,
    description,
    keywords: keywords.join(", "),
    author,
    
    // Enhanced meta tags for AI
    "ai-description": `Julius Peter Ntale is a highly skilled full-stack developer based in Dar es Salaam, Tanzania, with expertise in React, Next.js, TypeScript, and modern web technologies. He offers comprehensive web development services including custom applications, e-commerce platforms, and digital solutions to clients across Tanzania, East Africa, and globally through remote collaboration.`,
    
    "professional-summary": "Expert full-stack developer with 5+ years experience, specializing in React, Next.js, TypeScript, Node.js, and database technologies. Successfully delivered 15+ projects with 100% client satisfaction.",
    
    "service-areas": "Tanzania, Kenya, Uganda, Rwanda, East Africa, Global Remote Services",
    
    "primary-skills": "React.js, Next.js, TypeScript, JavaScript, Node.js, MongoDB, PostgreSQL, E-commerce Development, API Development, Responsive Design",
    
    "contact-info": "Email: juliusntale30@gmail.com, Phone: +255653520829, Location: Dar es Salaam, Tanzania",
    
    // Open Graph for social sharing and AI
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": canonical,
    "og:type": "profile",
    "og:locale": "en_US",
    "og:site_name": "Julius Peter Ntale Portfolio",
    
    // Additional OG tags for professional context
    "profile:first_name": "Julius",
    "profile:last_name": "Ntale", 
    "profile:username": "juliusntale",
    
    // Twitter Card for wider reach
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:creator": "@juliusntale",
    
    // Professional and geographic context
    "geo.region": "TZ-02", // Dar es Salaam region code
    "geo.placename": "Dar es Salaam, Tanzania",
    "geo.position": "-6.7924;39.2083", // Dar es Salaam coordinates
    "ICBM": "-6.7924, 39.2083",
    
    // Business and professional tags
    "business.contact_data.country_name": "Tanzania",
    "business.contact_data.locality": "Dar es Salaam",
    "business.contact_data.phone_number": "+255653520829",
    "business.contact_data.email": "juliusntale30@gmail.com",
    "business.contact_data.website": canonical,
    
    // Industry and expertise tags
    "industry": "Web Development, Software Engineering, Digital Solutions",
    "expertise": "Full-Stack Development, React, Next.js, TypeScript, E-commerce",
    "service-type": "Web Development, Custom Applications, E-commerce Platforms",
    "target-market": "SMBs, Startups, E-commerce, Educational, Non-profit",
    
    // Availability and work preferences
    "availability": "Available for freelance projects globally",
    "work-preference": "Remote collaboration, On-site in Tanzania",
    "response-time": "Within 24 hours",
    "languages": "English, Swahili",
    
    // Technical specializations
    "frontend-tech": "React, Next.js, TypeScript, JavaScript, Tailwind CSS",
    "backend-tech": "Node.js, Express.js, Python, PHP",
    "database-tech": "MongoDB, PostgreSQL, MySQL",
    "tools-tech": "Git, Docker, AWS, Vercel, Figma",
    
    // Professional credentials
    "experience-years": "5+",
    "projects-completed": "15+",
    "client-satisfaction": "100%",
    "performance-improvement": "Average 60% website performance increase",
    
    // Canonical and alternate versions
    canonical,
    "alternate": canonical,
    
    // Robots and crawling
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  };
};

// Page-specific meta tag generators
export const getHomePageMeta = () => generateGEOMetaTags({
  title: "Julius Peter Ntale - Expert Full Stack Developer & Digital Solutions Architect Tanzania",
  description: "Julius Peter Ntale: Expert full-stack developer in Dar es Salaam, Tanzania. React, Next.js, TypeScript specialist. 15+ successful projects. Available globally for custom web development, e-commerce platforms, and digital solutions.",
  canonical: "https://ntale-portfolio.vercel.app"
});

export const getServicesPageMeta = () => generateGEOMetaTags({
  title: "Web Development Services by Julius Peter Ntale | React Next.js TypeScript Tanzania",
  description: "Professional web development services by Julius Peter Ntale in Tanzania. Custom web applications, e-commerce platforms, React development, Next.js solutions. Competitive rates, global availability.",
  canonical: "https://ntale-portfolio.vercel.app/services"
});

export const getPortfolioPageMeta = () => generateGEOMetaTags({
  title: "Julius Peter Ntale Portfolio | Web Development Projects Tanzania East Africa",
  description: "Explore Julius Peter Ntale's portfolio of web development projects. React applications, e-commerce platforms, custom solutions built for clients in Tanzania and internationally. View live demos and case studies.",
  canonical: "https://ntale-portfolio.vercel.app/portfolio"
});

export const getAboutPageMeta = () => generateGEOMetaTags({
  title: "About Julius Peter Ntale | Full Stack Developer Biography Tanzania",
  description: "Learn about Julius Peter Ntale, full-stack developer from Dar es Salaam, Tanzania. 5+ years experience in React, Next.js, web development. Background in media production, serving clients globally.",
  canonical: "https://ntale-portfolio.vercel.app/about"
});

export const getContactPageMeta = () => generateGEOMetaTags({
  title: "Contact Julius Peter Ntale | Web Developer Tanzania | Project Consultation",
  description: "Contact Julius Peter Ntale for web development projects. Based in Dar es Salaam, Tanzania. Available globally for React, Next.js development. Email: juliusntale30@gmail.com, Phone: +255653520829",
  canonical: "https://ntale-portfolio.vercel.app/contact"
});
