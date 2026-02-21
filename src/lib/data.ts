import { PersonalInfo, Skill, Experience, Project } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Julius Peter Ntale",
  title: "Full-Stack Developer & Media Producer",
  bio: "Passionate full-stack developer with expertise in modern web technologies and a unique background in media production. I create engaging digital experiences that bridge technology and creativity, specializing in React, Next.js, and full-stack development.",
  location: "Dar es Salaam, Tanzania",
  email: "juliusntale30@gmail.com",
  website: "https://ntale-portfolio.vercel.app",
  resume: "/resume.pdf",
  avatar: "/optimized/ntale.webp",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/JuliusNtale",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/juliusntale",
      icon: "linkedin"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/juliusntale",
      icon: "instagram"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/juliusntale",
      icon: "facebook"
    }
  ]
};

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', level: 5, icon: 'react', color: '#61DAFB' },
  { id: '2', name: 'Next.js', category: 'frontend', level: 5, icon: 'nextjs', color: '#000000' },
  { id: '3', name: 'TypeScript', category: 'frontend', level: 4, icon: 'typescript', color: '#3178C6' },
  { id: '4', name: 'JavaScript', category: 'frontend', level: 5, icon: 'javascript', color: '#F7DF1E' },
  { id: '5', name: 'Tailwind CSS', category: 'frontend', level: 5, icon: 'tailwind', color: '#06B6D4' },
  { id: '6', name: 'Framer Motion', category: 'frontend', level: 4, icon: 'framer', color: '#0055FF' },
  
  // Backend
  { id: '7', name: 'Node.js', category: 'backend', level: 4, icon: 'nodejs', color: '#339933' },
  { id: '8', name: 'Express.js', category: 'backend', level: 4, icon: 'express', color: '#000000' },
  { id: '9', name: 'Python', category: 'backend', level: 3, icon: 'python', color: '#3776AB' },
  { id: '10', name: 'PHP', category: 'backend', level: 3, icon: 'php', color: '#777BB4' },
  
  // Database
  { id: '11', name: 'MongoDB', category: 'database', level: 4, icon: 'mongodb', color: '#47A248' },
  { id: '12', name: 'MySQL', category: 'database', level: 4, icon: 'mysql', color: '#4479A1' },
  { id: '13', name: 'PostgreSQL', category: 'database', level: 3, icon: 'postgresql', color: '#336791' },
  
  // Tools
  { id: '14', name: 'Git', category: 'tool', level: 5, icon: 'git', color: '#F05032' },
  { id: '15', name: 'Docker', category: 'tool', level: 3, icon: 'docker', color: '#2496ED' },
  { id: '16', name: 'Figma', category: 'tool', level: 4, icon: 'figma', color: '#F24E1E' },
  { id: '17', name: 'Adobe Creative Suite', category: 'tool', level: 4, icon: 'adobe', color: '#FF0000' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    description: 'Developing modern web applications using React, Next.js, and Node.js. Creating responsive, user-friendly interfaces and robust backend systems.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    startDate: '2022-01-01',
    current: true,
    achievements: [
      'Built 10+ responsive web applications',
      'Improved client website performance by 60%',
      'Implemented modern UI/UX design principles'
    ]
  },
  {
    id: '2',
    company: 'Hillsview Media',
    position: 'Media Producer & Web Developer',
    description: 'Combined technical skills with creative media production, developing the company website and managing digital content creation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Adobe Creative Suite'],
    startDate: '2020-06-01',
    endDate: '2022-12-31',
    current: false,
    achievements: [
      'Developed company website increasing online presence by 200%',
      'Produced 50+ professional photography and videography projects',
      'Streamlined digital workflow processes'
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Neuraltale Official Website',
    description: 'Corporate website for Neuraltale Technologies focused on brand visibility, company profile, and conversion-driven service communication.',
    longDescription: 'A production-ready corporate website built to present Neuraltale Technologies with a clean brand-first experience, high-performance landing pages, and clear service pathways for enterprise and startup clients.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'SEO', 'Vercel'],
    image: 'https://image.thum.io/get/width/1400/noanimate/https://neuraltale.com',
    images: ['https://image.thum.io/get/width/1400/noanimate/https://neuraltale.com'],
    githubUrl: 'https://github.com/JuliusNtale',
    liveUrl: 'https://neuraltale.com',
    featured: true,
    category: 'web',
    startDate: '2025-01-01',
    endDate: '2025-03-31',
    status: 'completed',
    highlights: [
      'Delivered a polished corporate homepage experience',
      'Implemented responsive UX for mobile and desktop users',
      'Optimized pages for performance and discoverability'
    ],
    challenges: [
      'Balancing visual brand identity with loading performance',
      'Structuring content for both users and search engines',
      'Maintaining consistency across different screen sizes'
    ],
    lessons: [
      'Strengthened enterprise-focused UI communication patterns',
      'Improved production deployment and optimization workflow',
      'Validated scalable component architecture in real-world use'
    ]
  },
  {
    id: '2',
    title: 'Neuralashop Microservices E-Commerce',
    description: 'Microservices-based e-commerce platform for tech gadgets with modular architecture and scalable service boundaries.',
    longDescription: 'A live e-commerce platform engineered with a microservices mindset to support product discovery, catalog browsing, and scalable commerce operations for a growing technology retail audience.',
    technologies: ['Microservices', 'React', 'Node.js', 'API Gateway', 'Docker'],
    image: 'https://image.thum.io/get/width/1400/noanimate/https://neurlashop.neuraltale.com',
    images: ['https://image.thum.io/get/width/1400/noanimate/https://neurlashop.neuraltale.com'],
    githubUrl: 'https://github.com/JuliusNtale',
    liveUrl: 'https://neurlashop.neuraltale.com',
    featured: true,
    category: 'web',
    startDate: '2025-04-01',
    endDate: '2025-07-31',
    status: 'completed',
    highlights: [
      'Built a production commerce interface for tech products',
      'Structured architecture for service-level scalability',
      'Delivered reliable UX across catalog and product flows'
    ],
    challenges: [
      'Coordinating UI behavior across distributed services',
      'Handling consistency in multi-service data contracts',
      'Maintaining responsive performance with richer catalog content'
    ],
    lessons: [
      'Deepened understanding of microservices-driven frontends',
      'Improved production troubleshooting for distributed systems',
      'Strengthened API-first integration and release workflows'
    ]
  },
  {
    id: '3',
    title: 'The Link Africa Website',
    description: 'Opportunity and scholarship platform connecting young Africans with curated academic, career, and funding opportunities.',
    longDescription: 'A modern opportunity platform designed to make scholarships and development opportunities easy to discover, filter, and access for users across Africa with a clean and trustworthy experience.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Content Management', 'SEO'],
    image: 'https://image.thum.io/get/width/1400/noanimate/https://thelin.africa',
    images: ['https://image.thum.io/get/width/1400/noanimate/https://thelin.africa'],
    githubUrl: 'https://github.com/JuliusNtale',
    liveUrl: 'https://thelin.africa',
    featured: true,
    category: 'web',
    startDate: '2025-08-01',
    endDate: '2025-10-31',
    status: 'completed',
    highlights: [
      'Created a clear opportunities discovery experience',
      'Optimized structure for discoverability and engagement',
      'Delivered responsive layouts across all device classes'
    ],
    challenges: [
      'Designing high-density listings without visual clutter',
      'Balancing editorial content with product-style usability',
      'Improving readability and hierarchy for mobile users'
    ],
    lessons: [
      'Improved information architecture for opportunity-driven platforms',
      'Enhanced practical SEO implementation for content-heavy pages',
      'Refined reusable UI patterns for long-term maintainability'
    ]
  }
];
