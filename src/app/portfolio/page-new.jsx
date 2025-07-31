import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const PortfolioClient = dynamic(() => import('./portfolio-client'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading portfolio...</p>
      </div>
    </div>
  ),
  ssr: false
});

export const metadata = {
  title: 'Portfolio & Projects | Julius Ntale',
  description: 'Explore my collection of web development projects showcasing expertise in React, Next.js, TypeScript, and full-stack development.',
  keywords: 'Julius Ntale, portfolio, projects, web development, React, Next.js, TypeScript, full-stack developer',
  openGraph: {
    title: 'Portfolio & Projects | Julius Ntale',
    description: 'Explore my collection of web development projects showcasing expertise in React, Next.js, TypeScript, and full-stack development.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
