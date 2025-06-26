import { track } from '@vercel/analytics';

// Custom analytics tracking functions
export const analytics = {
  // Track page views
  pageView: (page: string) => {
    track('Page View', { page });
  },

  // Track button clicks
  buttonClick: (button: string, location: string) => {
    track('Button Click', { button, location });
  },

  // Track project views
  projectView: (projectTitle: string, projectCategory: string) => {
    track('Project View', { 
      project: projectTitle, 
      category: projectCategory 
    });
  },

  // Track contact form submissions
  contactForm: (formType: 'contact' | 'newsletter') => {
    track('Form Submission', { type: formType });
  },

  // Track theme changes
  themeChange: (theme: 'light' | 'dark' | 'system') => {
    track('Theme Change', { theme });
  },

  // Track skill interactions
  skillHover: (skillName: string) => {
    track('Skill Interaction', { skill: skillName });
  },

  // Track download events (like resume)
  download: (fileName: string) => {
    track('Download', { file: fileName });
  },

  // Track social link clicks
  socialClick: (platform: string) => {
    track('Social Click', { platform });
  },

  // Track scroll depth
  scrollDepth: (depth: '25%' | '50%' | '75%' | '100%', page: string) => {
    track('Scroll Depth', { depth, page });
  },

  // Track search events (for blog)
  search: (query: string, resultsCount: number) => {
    track('Search', { query, results: resultsCount });
  }
};

// Hook for tracking scroll depth
export const useScrollDepthTracking = (pageName: string) => {
  if (typeof window === 'undefined') return;

  const trackingPoints = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    trackingPoints.forEach(point => {
      if (scrollPercent >= point && !tracked.has(point)) {
        tracked.add(point);
        analytics.scrollDepth(`${point}%` as any, pageName);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

// Performance monitoring
export const performanceTracking = {
  // Track Core Web Vitals
  trackWebVitals: (metric: any) => {
    track('Web Vitals', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating
    });
  },

  // Track page load time
  trackPageLoad: (loadTime: number, page: string) => {
    track('Page Load Time', {
      time: loadTime,
      page: page
    });
  }
};

export default analytics;
