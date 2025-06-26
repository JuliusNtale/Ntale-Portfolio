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

export function generateSEO({
  title = "Julius Ntale - Full Stack Developer & Creative Professional",
  description = "Experienced full-stack developer specializing in React, Next.js, and modern web technologies. Also passionate about photography and videography.",
  keywords = [
    "Julius Ntale",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Software Engineer",
    "Photography",
    "Videography",
    "Uganda Developer"
  ],
  image = "/images/og-image.jpg",
  url = "https://juliusntale.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Julius Ntale"
}: SEOProps): Metadata {
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
    name: 'Julius Ntale',
    url: 'https://juliusntale.com',
    image: 'https://juliusntale.com/images/profile.jpg',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    sameAs: [
      'https://github.com/JuliusNtale',
      'https://linkedin.com/in/juliusntale',
      'https://twitter.com/juliusntale'
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Full Stack Development',
      'Web Development',
      'Photography',
      'Videography'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampala',
      addressCountry: 'Uganda'
    }
  };
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Julius Ntale Portfolio',
    url: 'https://juliusntale.com',
    description: 'Portfolio website of Julius Ntale, full-stack developer and creative professional',
    author: {
      '@type': 'Person',
      name: 'Julius Ntale'
    },
    inLanguage: 'en-US'
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
