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
    title: 'React E-commerce Platform',
    description: 'A full-featured e-commerce website with user authentication, shopping cart, and payment integration.',
    longDescription: 'A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, product catalog, shopping cart functionality, and secure payment processing. The platform includes an admin dashboard for inventory management and order tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API', 'Tailwind CSS'],
    image: '/optimized/project1.webp',
    images: ['/optimized/project1.webp'],
    githubUrl: 'https://github.com/JuliusNtale/react-ecommerce',
    liveUrl: 'https://react-ecommerce-demo.vercel.app',
    featured: true,
    category: 'web',
    startDate: '2023-03-01',
    endDate: '2023-06-30',
    status: 'completed',
    highlights: [
      'Implemented secure payment processing with Stripe',
      'Built responsive design with mobile-first approach',
      'Integrated real-time inventory management'
    ],
    challenges: [
      'Implementing secure user authentication',
      'Optimizing performance for large product catalogs',
      'Ensuring PCI compliance for payment processing'
    ],
    lessons: [
      'Learned advanced React patterns and state management',
      'Gained experience with payment gateway integration',
      'Improved understanding of e-commerce user flows'
    ]
  },
  {
    id: '2',
    title: 'Next.js Portfolio Website',
    description: 'A modern, animated portfolio website showcasing projects and skills with smooth animations.',
    longDescription: 'This portfolio website demonstrates modern web development techniques using Next.js 14, featuring smooth animations with Framer Motion, responsive design, and optimized performance. The site includes dynamic project showcases, skill visualizations, and integrated contact forms.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
    image: '/optimized/project2.webp',
    images: ['/optimized/project2.webp'],
    githubUrl: 'https://github.com/JuliusNtale/ntale-portfolio',
    liveUrl: 'https://ntale-portfolio.vercel.app',
    featured: true,
    category: 'web',
    startDate: '2023-08-01',
    endDate: '2023-10-15',
    status: 'completed',
    highlights: [
      'Achieved 98+ Lighthouse performance score',
      'Implemented advanced animations with Framer Motion',
      'Built with accessibility and SEO best practices'
    ],
    challenges: [
      'Optimizing animation performance',
      'Creating engaging user interactions',
      'Balancing visual appeal with loading speed'
    ],
    lessons: [
      'Mastered advanced Framer Motion techniques',
      'Learned performance optimization strategies',
      'Improved design and user experience skills'
    ]
  },
  {
    id: '3',
    title: 'Student Management System',
    description: 'A comprehensive school management system for tracking student attendance and academic records.',
    longDescription: 'A full-stack web application designed for educational institutions to manage student information, track attendance, monitor academic progress, and facilitate parent-school communication. The system includes role-based access control for administrators, teachers, students, and parents.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Chart.js', 'Material-UI'],
    image: '/optimized/project3.webp',
    images: ['/optimized/project3.webp'],
    githubUrl: 'https://github.com/JuliusNtale/student-management-system',
    featured: true,
    category: 'web',
    startDate: '2022-09-01',
    endDate: '2023-01-30',
    status: 'completed',
    highlights: [
      'Implemented role-based access control',
      'Built comprehensive reporting dashboard',
      'Integrated automated notification system'
    ],
    challenges: [
      'Designing complex database relationships',
      'Implementing secure multi-role authentication',
      'Creating intuitive interfaces for different user types'
    ],
    lessons: [
      'Gained experience with complex database design',
      'Learned about educational technology requirements',
      'Improved project management and planning skills'
    ]
  },
  {
    id: '4',
    title: 'Hillsview Media Website',
    description: 'A professional media production company website showcasing photography and videography services.',
    longDescription: 'A sleek, professional website for Hillsview Media, a photography and videography company. The site features an elegant portfolio gallery, service descriptions, client testimonials, and contact forms. Built with performance and visual appeal in mind to attract potential clients.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Lightbox.js', 'PHP'],
    image: '/optimized/project4.webp',
    images: ['/optimized/project4.webp'],
    githubUrl: 'https://github.com/JuliusNtale/hillsview-website',
    liveUrl: 'https://hillsviewmedia.com',
    featured: true,
    category: 'web',
    startDate: '2021-05-01',
    endDate: '2021-08-15',
    status: 'completed',
    highlights: [
      'Created stunning visual portfolio galleries',
      'Implemented smooth scrolling animations',
      'Optimized images for fast loading'
    ],
    challenges: [
      'Optimizing large media files for web',
      'Creating engaging visual storytelling',
      'Balancing aesthetics with functionality'
    ],
    lessons: [
      'Learned advanced CSS animation techniques',
      'Gained experience with media optimization',
      'Improved understanding of client requirements'
    ]
  }
];
