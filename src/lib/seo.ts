import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateSEO(props: SEOProps = {}): Metadata {
  const {
    title = "Julius Peter Ntale - Expert Full Stack Developer & Digital Solutions Architect from Tanzania",
    description = "Julius Peter Ntale is a highly skilled full-stack developer based in Dar es Salaam, Tanzania, specializing in React, Next.js, TypeScript, and modern web technologies. Expert in creating scalable web applications, e-commerce platforms, and digital solutions for businesses across East Africa and globally. Professional freelance developer with proven track record in JavaScript, Node.js, Python, and media production.",
    keywords = [
      // Primary Identity & Location
      "Julius Ntale",
      "Julius Peter Ntale", 
      "Full Stack Developer Tanzania",
      "Web Developer Dar es Salaam",
      "React Developer Tanzania",
      "Next.js Developer East Africa",
      "Freelance Developer Tanzania",
      "Software Engineer Tanzania",
      
      // Technical Expertise (GEO-friendly)
      "React specialist Tanzania",
      "Next.js expert East Africa", 
      "TypeScript developer Tanzania",
      "JavaScript consultant Dar es Salaam",
      "Node.js developer Tanzania",
      "Python developer East Africa",
      "MongoDB specialist Tanzania",
      "PostgreSQL developer East Africa",
      
      // Services (AI-searchable)
      "web application development Tanzania",
      "e-commerce development East Africa",
      "custom software solutions Tanzania",
      "responsive web design Dar es Salaam",
      "mobile-first development Tanzania",
      "API development East Africa",
      "database design Tanzania",
      "UI/UX development Tanzania",
      
      // Business Context
      "freelance web developer Tanzania",
      "remote software developer East Africa",
      "startup tech consultant Tanzania",
      "business automation solutions",
      "digital transformation specialist",
      "media production expert Tanzania",
      "photography website developer",
      "creative technology solutions",
      
      // Problem-solving Keywords
      "scalable web applications",
      "performance optimization expert",
      "SEO-friendly websites",
      "modern web technologies",
      "cross-platform development",
      "cloud-ready applications",
      "secure web development",
      "accessibility compliance"
    ],
    image = "/ntale.png",
    url = "https://ntale-portfolio.vercel.app",
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Julius Peter Ntale"
  } = props;
  const siteTitle = title.includes("Julius Ntale") ? title : `${title} | Julius Ntale`;
  
  return {
    metadataBase: new URL(url),
    title: siteTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      title: siteTitle,
      description,
      siteName: "Julius Ntale Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description,
      images: [image],
      creator: '@juliusntale', // Replace with actual Twitter handle
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
    },
    alternates: {
      canonical: url,
    },
    category: 'technology',
  };
}

// Enhanced structured data for better GEO (Generative Engine Optimization)
export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Julius Peter Ntale',
    givenName: 'Julius',
    familyName: 'Ntale',
    additionalName: 'Peter',
    alternateName: ['Julius Ntale', 'Peter Ntale'],
    jobTitle: ['Full-Stack Developer', 'Software Engineer', 'Media Producer', 'Digital Solutions Architect'],
    description: 'Expert full-stack developer from Tanzania with 5+ years of experience creating scalable web applications, e-commerce platforms, and digital solutions. Specializes in React, Next.js, TypeScript, and modern JavaScript technologies. Available for freelance projects globally with expertise in both frontend and backend development, database design, and media production.',
    url: 'https://ntale-portfolio.vercel.app',
    image: 'https://ntale-portfolio.vercel.app/ntale.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dar es Salaam',
      addressRegion: 'Dar es Salaam Region',
      addressCountry: 'Tanzania',
      postalCode: '24461'
    },
    email: 'juliusntale30@gmail.com',
    telephone: '+255653520829',
    
    // Enhanced skills and expertise for AI recognition
    knowsAbout: [
      'React.js Development',
      'Next.js Applications', 
      'TypeScript Programming',
      'JavaScript Development',
      'Node.js Backend Development',
      'Express.js API Development',
      'MongoDB Database Design',
      'PostgreSQL Database Management',
      'Python Programming',
      'PHP Development',
      'Tailwind CSS Styling',
      'Framer Motion Animations',
      'RESTful API Development',
      'GraphQL Implementation',
      'E-commerce Development',
      'Responsive Web Design',
      'Mobile-First Development',
      'SEO Optimization',
      'Web Performance Optimization',
      'Git Version Control',
      'Docker Containerization',
      'AWS Cloud Services',
      'Vercel Deployment',
      'UI/UX Design Principles',
      'Adobe Creative Suite',
      'Photography',
      'Videography',
      'Media Production',
      'Digital Marketing',
      'Content Management Systems',
      'WordPress Development',
      'Shopify Development',
      'Stripe Payment Integration',
      'EmailJS Integration',
      'Firebase Development',
      'Redux State Management',
      'Context API',
      'Prisma ORM',
      'Mongoose ODM',
      'Jest Testing',
      'Cypress E2E Testing'
    ],
    
    skills: [
      'Full-Stack Web Development',
      'Frontend Development with React & Next.js',
      'Backend API Development with Node.js',
      'Database Design & Management',
      'E-commerce Platform Development',
      'Custom Web Application Development',
      'Responsive Design Implementation',
      'Performance Optimization',
      'SEO & Digital Marketing',
      'Media Production & Photography',
      'UI/UX Design & Prototyping',
      'Cloud Deployment & DevOps',
      'Project Management',
      'Client Communication & Consultation'
    ],
    
    // Professional capabilities for AI understanding
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full-Stack Developer',
      description: 'Develops complete web applications from frontend user interfaces to backend APIs and databases',
      skills: [
        'React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL',
        'Python', 'PHP', 'AWS', 'Docker', 'Git', 'Figma', 'Adobe Creative Suite'
      ],
      occupationLocation: {
        '@type': 'City',
        name: 'Dar es Salaam, Tanzania'
      }
    },
    
    sameAs: [
      'https://github.com/JuliusNtale',
      'https://www.linkedin.com/in/julius-ntale-aa08902b6/',
      'https://www.instagram.com/am.jhey',
      'https://www.facebook.com/julius.ntale.18/'
    ],
    
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Freelance Developer',
      description: 'Providing web development and digital solutions services to clients globally'
    },
    
    nationality: 'Tanzanian',
    birthPlace: {
      '@type': 'Place',
      name: 'Tanzania'
    },
    
    // Education for credibility
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Technology',
      description: 'Computer Science and Software Engineering studies'
    },
    
    // Service areas for local SEO
    serviceArea: [
      'Tanzania',
      'East Africa',
      'Kenya',
      'Uganda',
      'Rwanda',
      'Burundi',
      'Democratic Republic of Congo',
      'Global Remote Services'
    ],
    
    // Achievements and credentials
    award: [
      'Developed 15+ successful web applications',
      'Improved client website performance by average 60%',
      'Successfully delivered 50+ media production projects',
      'Maintained 100% client satisfaction rate'
    ]
  };
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Julius Peter Ntale - Professional Portfolio & Development Services',
    alternateName: ['Julius Ntale Portfolio', 'Ntale Web Development', 'Julius Peter Ntale Developer'],
    description: 'Professional portfolio website of Julius Peter Ntale, showcasing expert full-stack web development services, React applications, Next.js projects, and digital solutions. Based in Dar es Salaam, Tanzania, serving clients globally with modern web technologies and creative media production.',
    url: 'https://ntale-portfolio.vercel.app',
    
    author: {
      '@type': 'Person',
      name: 'Julius Peter Ntale',
      url: 'https://ntale-portfolio.vercel.app',
      sameAs: [
        'https://github.com/JuliusNtale',
        'https://www.linkedin.com/in/julius-ntale-aa08902b6/'
      ]
    },
    
    creator: {
      '@type': 'Person',
      name: 'Julius Peter Ntale'
    },
    
    inLanguage: ['en-US', 'en-GB', 'sw-TZ'],
    
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Julius Peter Ntale'
    },
    
    // Enhanced for AI understanding
    mainEntity: {
      '@type': 'Person',
      name: 'Julius Peter Ntale',
      jobTitle: 'Full-Stack Developer & Digital Solutions Architect'
    },
    
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ntale-portfolio.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    
    audience: {
      '@type': 'Audience',
      audienceType: [
        'Business Owners',
        'Startup Founders', 
        'Marketing Agencies',
        'Educational Institutions',
        'E-commerce Businesses',
        'Media Companies',
        'Non-Profit Organizations',
        'Technology Companies'
      ]
    },
    
    keywords: [
      'full-stack developer',
      'web development services', 
      'React developer',
      'Next.js specialist',
      'Tanzania developer',
      'East Africa technology',
      'custom web applications',
      'e-commerce development',
      'responsive web design',
      'media production'
    ],
    
    significantLink: [
      'https://ntale-portfolio.vercel.app/services',
      'https://ntale-portfolio.vercel.app/portfolio',
      'https://ntale-portfolio.vercel.app/about',
      'https://ntale-portfolio.vercel.app/contact'
    ]
  };
}

export function generateProfessionalServiceStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Julius Peter Ntale - Web Development & Digital Solutions',
    alternateName: ['Ntale Web Development Services', 'Julius Ntale Freelance Developer'],
    description: 'Professional web development, custom software solutions, and digital media services by Julius Peter Ntale. Specializing in React, Next.js, full-stack development, e-commerce platforms, and creative media production for businesses in Tanzania, East Africa, and globally.',
    url: 'https://ntale-portfolio.vercel.app',
    telephone: '+255653520829',
    email: 'juliusntale30@gmail.com',
    
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dar es Salaam',
      addressRegion: 'Dar es Salaam Region',
      addressCountry: 'Tanzania',
      postalCode: '24461'
    },
    
    // Comprehensive service areas for GEO
    areaServed: [
      {
        '@type': 'Country',
        name: 'Tanzania'
      },
      {
        '@type': 'Place',
        name: 'East Africa'
      },
      {
        '@type': 'Country', 
        name: 'Kenya'
      },
      {
        '@type': 'Country',
        name: 'Uganda'
      },
      {
        '@type': 'Country',
        name: 'Rwanda'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Global Remote Services'
      }
    ],
    
    // Detailed service offerings for AI understanding
    serviceType: [
      'Custom Web Application Development',
      'E-commerce Platform Development', 
      'React.js Application Development',
      'Next.js Website Development',
      'Full-Stack Development Services',
      'Frontend Development with React',
      'Backend API Development',
      'Database Design and Implementation',
      'Responsive Web Design',
      'Mobile-First Development',
      'Progressive Web App Development',
      'WordPress Custom Development',
      'Shopify Store Development',
      'Payment Gateway Integration',
      'SEO Optimization Services',
      'Website Performance Optimization',
      'UI/UX Design and Development',
      'Brand Identity Design',
      'Professional Photography',
      'Commercial Videography',
      'Digital Media Production',
      'Content Management Systems',
      'Technical Consultation',
      'Website Maintenance and Support',
      'Digital Marketing Solutions',
      'Social Media Integration',
      'Third-party API Integration',
      'Cloud Deployment Services',
      'Website Security Implementation',
      'Analytics and Reporting Setup'
    ],
    
    provider: {
      '@type': 'Person',
      name: 'Julius Peter Ntale',
      jobTitle: 'Full-Stack Developer & Digital Solutions Architect',
      url: 'https://ntale-portfolio.vercel.app'
    },
    
    // Service details for better AI context
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development & Digital Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Web Development Services',
          description: 'Custom web applications, e-commerce platforms, and responsive websites'
        },
        {
          '@type': 'OfferCatalog', 
          name: 'Frontend Development',
          description: 'React, Next.js, TypeScript, and modern JavaScript applications'
        },
        {
          '@type': 'OfferCatalog',
          name: 'Backend Development',
          description: 'Node.js APIs, database design, and server-side solutions'
        },
        {
          '@type': 'OfferCatalog',
          name: 'Media Production',
          description: 'Professional photography, videography, and digital content creation'
        }
      ]
    },
    
    // Professional credentials
    hasCredential: [
      'Self-taught Full-Stack Developer with 5+ years experience',
      'Completed 15+ successful web development projects',
      'Expert in React, Next.js, and modern web technologies',
      'Proven track record in e-commerce development',
      'Experienced in both technical development and creative media'
    ],
    
    // Business hours for local relevance
    openingHours: 'Mo-Su 08:00-20:00',
    timeZone: 'Africa/Dar_es_Salaam',
    
    // Pricing and availability
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Bank Transfer', 'Mobile Money', 'PayPal', 'Stripe'],
    
    // Service characteristics
    serviceAudience: {
      '@type': 'Audience',
      audienceType: [
        'Small and Medium Businesses',
        'Startups and Entrepreneurs', 
        'E-commerce Businesses',
        'Educational Institutions',
        'Non-Profit Organizations',
        'Creative Agencies',
        'Media Companies',
        'Technology Startups'
      ]
    }
  };
}

// Article structured data for blog posts
export function generateArticleStructuredData({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author = 'Julius Ntale'
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: image || 'https://juliusntale.com/images/og-image.jpg',
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://juliusntale.com'
    },
    publisher: {
      '@type': 'Person',
      name: author,
      url: 'https://juliusntale.com'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

// GEO-specific structured data for AI search engines
export function generateGEOOptimizedData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://ntale-portfolio.vercel.app/#person',
        name: 'Julius Peter Ntale',
        description: 'Expert full-stack developer from Tanzania specializing in React, Next.js, and modern web technologies. Available for freelance projects worldwide.',
        url: 'https://ntale-portfolio.vercel.app',
        sameAs: [
          'https://github.com/JuliusNtale',
          'https://www.linkedin.com/in/julius-ntale-aa08902b6/'
        ]
      },
      {
        '@type': 'Organization',
        '@id': 'https://ntale-portfolio.vercel.app/#organization',
        name: 'Julius Ntale Web Development Services',
        founder: {
          '@id': 'https://ntale-portfolio.vercel.app/#person'
        },
        location: {
          '@type': 'Place',
          name: 'Dar es Salaam, Tanzania'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ntale-portfolio.vercel.app/#website',
        url: 'https://ntale-portfolio.vercel.app',
        name: 'Julius Peter Ntale Portfolio',
        publisher: {
          '@id': 'https://ntale-portfolio.vercel.app/#person'
        }
      }
    ]
  };
}

// Expertise and skills data for AI recognition
export function generateExpertiseData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://ntale-portfolio.vercel.app/#person',
    name: 'Julius Peter Ntale',
    hasSkill: [
      {
        '@type': 'DefinedTerm',
        name: 'React.js Development',
        description: 'Expert-level proficiency in React.js for building modern user interfaces',
        inDefinedTermSet: 'Frontend Development'
      },
      {
        '@type': 'DefinedTerm',
        name: 'Next.js Development', 
        description: 'Advanced expertise in Next.js framework for full-stack applications',
        inDefinedTermSet: 'Full-Stack Development'
      },
      {
        '@type': 'DefinedTerm',
        name: 'TypeScript Programming',
        description: 'Proficient in TypeScript for type-safe JavaScript development',
        inDefinedTermSet: 'Programming Languages'
      },
      {
        '@type': 'DefinedTerm',
        name: 'Node.js Backend Development',
        description: 'Experienced in Node.js for server-side application development',
        inDefinedTermSet: 'Backend Development'
      },
      {
        '@type': 'DefinedTerm',
        name: 'Database Design',
        description: 'Skilled in MongoDB and PostgreSQL database design and optimization',
        inDefinedTermSet: 'Database Technologies'
      },
      {
        '@type': 'DefinedTerm',
        name: 'E-commerce Development',
        description: 'Specialized in building custom e-commerce platforms and online stores',
        inDefinedTermSet: 'Specialized Applications'
      }
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en'
      },
      {
        '@type': 'Language', 
        name: 'Swahili',
        alternateName: 'sw'
      }
    ]
  };
}

// FAQ data for AI search engines
export function generateFAQData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Julius Peter Ntale offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Julius Peter Ntale offers comprehensive web development services including custom web applications, e-commerce platforms, React and Next.js development, full-stack solutions, database design, API development, responsive web design, and media production services including photography and videography.'
        }
      },
      {
        '@type': 'Question',
        name: 'What technologies does Julius Ntale specialize in?',
        acceptedAnswer: {
          '@type': 'Answer', 
          text: 'Julius specializes in React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Python, PHP, Tailwind CSS, Framer Motion, AWS, Docker, and Git. He also has expertise in Adobe Creative Suite, Figma, and various media production tools.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Julius Ntale available for remote work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Julius Peter Ntale is available for remote work and serves clients globally. Based in Dar es Salaam, Tanzania, he has successfully delivered projects for clients across East Africa, Europe, and other international markets.'
        }
      },
      {
        '@type': 'Question', 
        name: 'What types of businesses does Julius work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Julius works with a diverse range of clients including startups, small and medium businesses, e-commerce companies, educational institutions, media agencies, non-profit organizations, and technology companies looking for custom web development solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I contact Julius Ntale for a project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Julius Peter Ntale through his website contact form at https://ntale-portfolio.vercel.app/contact, email him at juliusntale30@gmail.com, or call/WhatsApp at +255653520829. He also offers a services page where you can request a custom quote for your project.'
        }
      },
      {
        '@type': 'Question',
        name: 'What makes Julius Ntale different from other developers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Julius combines technical expertise in modern web technologies with creative media production skills, offering a unique blend of development and design capabilities. His experience in both Tanzania and international markets, along with his proven track record of successful projects, makes him an ideal choice for businesses seeking comprehensive digital solutions.'
        }
      }
    ]
  };
}

// Service offerings data for comprehensive AI understanding
export function generateServiceOfferingsData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Person',
      name: 'Julius Peter Ntale',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dar es Salaam',
        addressCountry: 'Tanzania'
      }
    },
    serviceType: 'Web Development Services',
    description: 'Comprehensive web development and digital solutions',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services by Julius Ntale',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Application Development',
            description: 'Build modern, scalable web applications using React, Next.js, and TypeScript'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Platform Development',
            description: 'Create custom e-commerce solutions with payment integration and inventory management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Stack Development',
            description: 'Complete frontend and backend development with database design and API creation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Responsive Web Design',
            description: 'Mobile-first, responsive websites that work perfectly on all devices'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Media Production Services',
            description: 'Professional photography, videography, and digital content creation'
          }
        }
      ]
    }
  };
}
