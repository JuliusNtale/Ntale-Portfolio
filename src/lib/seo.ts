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
    title = "Julius Peter Ntale - Full Stack Developer & Media Producer",
    description = "Passionate full-stack developer from Tanzania specializing in React, Next.js, and modern web technologies. Creating innovative digital solutions with expertise in both development and media production.",
    keywords = [
      "Julius Ntale",
      "Julius Peter Ntale", 
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Web Developer Tanzania",
      "Dar es Salaam Developer",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Software Engineer",
      "Media Producer",
      "Photography",
      "Videography",
      "Tanzania Developer",
      "East Africa Developer",
      "Portfolio Website"
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

// Structured data for better SEO
export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Julius Peter Ntale',
    givenName: 'Julius',
    familyName: 'Ntale',
    additionalName: 'Peter',
    jobTitle: 'Full-Stack Developer & Media Producer',
    description: 'Passionate full-stack developer from Tanzania specializing in React, Next.js, and modern web technologies. Creating innovative digital solutions with expertise in both development and media production.',
    url: 'https://ntale-portfolio.vercel.app',
    image: 'https://ntale-portfolio.vercel.app/ntale.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dar es Salaam',
      addressCountry: 'Tanzania',
      postalCode: '24461'
    },
    email: 'juliusntale30@gmail.com',
    telephone: '+255653520829',
    knowsAbout: [
      'React',
      'Next.js', 
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Web Development',
      'Full-Stack Development',
      'Media Production',
      'Photography',
      'Videography',
      'UI/UX Design'
    ],
    skills: [
      'React Development',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'AWS',
      'Git',
      'Docker'
    ],
    sameAs: [
      'https://github.com/JuliusNtale',
      'https://www.linkedin.com/in/julius-ntale-aa08902b6/',
      'https://www.instagram.com/am.jhey',
      'https://www.facebook.com/julius.ntale.18/'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Developer'
    },
    nationality: 'Tanzanian',
    birthPlace: 'Tanzania',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Technology'
    }
  };
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Julius Peter Ntale Portfolio',
    description: 'Portfolio website of Julius Peter Ntale, a full-stack developer and media producer from Tanzania',
    url: 'https://ntale-portfolio.vercel.app',
    author: {
      '@type': 'Person',
      name: 'Julius Peter Ntale',
      url: 'https://ntale-portfolio.vercel.app'
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Julius Peter Ntale'
    }
  };
}

export function generateProfessionalServiceStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Julius Peter Ntale - Web Development Services',
    description: 'Professional web development and media production services',
    url: 'https://ntale-portfolio.vercel.app',
    telephone: '+255653520829',
    email: 'juliusntale30@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dar es Salaam',
      addressCountry: 'Tanzania'
    },
    areaServed: [
      'Tanzania',
      'East Africa',
      'Global'
    ],
    serviceType: [
      'Web Development',
      'Full-Stack Development',
      'React Development', 
      'Next.js Development',
      'Media Production',
      'Photography',
      'Videography'
    ],
    provider: {
      '@type': 'Person',
      name: 'Julius Peter Ntale'
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
