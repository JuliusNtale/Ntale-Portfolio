"use client";
import { useEffect } from 'react';

// Performance monitoring utility
export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
          
          // Send to analytics if needed
          if (typeof gtag !== 'undefined') {
            gtag('event', 'LCP', {
              event_category: 'Web Vitals',
              value: Math.round(lastEntry.startTime),
              non_interaction: true,
            });
          }
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
            
            if (typeof gtag !== 'undefined') {
              gtag('event', 'FID', {
                event_category: 'Web Vitals',
                value: Math.round(entry.processingStart - entry.startTime),
                non_interaction: true,
              });
            }
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        let clsEntries = [];
        
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              clsEntries.push(entry);
            }
          });
          
          console.log('CLS:', clsValue);
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'CLS', {
              event_category: 'Web Vitals',
              value: Math.round(clsValue * 1000),
              non_interaction: true,
            });
          }
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }
      }
    };

    // Resource loading performance
    const monitorResourceLoading = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            // Log slow resources (> 1s)
            if (entry.duration > 1000) {
              console.warn(`Slow resource: ${entry.name} took ${entry.duration}ms`);
            }
          });
        });
        
        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (e) {
          console.warn('Resource observer not supported');
        }
      }
    };

    // Navigation timing
    const logNavigationTiming = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const [navigationEntry] = performance.getEntriesByType('navigation');
        
        if (navigationEntry) {
          const metrics = {
            dns: navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart,
            tcp: navigationEntry.connectEnd - navigationEntry.connectStart,
            ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
            download: navigationEntry.responseEnd - navigationEntry.responseStart,
            dom: navigationEntry.domInteractive - navigationEntry.responseEnd,
            total: navigationEntry.loadEventEnd - navigationEntry.fetchStart,
          };
          
          console.log('Navigation timing:', metrics);
          
          // Send to analytics if needed
          if (typeof gtag !== 'undefined') {
            Object.entries(metrics).forEach(([key, value]) => {
              gtag('event', `timing_${key}`, {
                event_category: 'Navigation Timing',
                value: Math.round(value),
                non_interaction: true,
              });
            });
          }
        }
      }
    };

    // Initialize monitoring
    observeWebVitals();
    monitorResourceLoading();
    
    // Log navigation timing after page load
    if (document.readyState === 'complete') {
      logNavigationTiming();
    } else {
      window.addEventListener('load', logNavigationTiming);
    }

    // Memory usage monitoring (Chrome only)
    if ('memory' in performance) {
      const logMemoryUsage = () => {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      };
      
      // Log memory usage every 30 seconds in development
      if (process.env.NODE_ENV === 'development') {
        const memoryInterval = setInterval(logMemoryUsage, 30000);
        return () => clearInterval(memoryInterval);
      }
    }
  }, []);

  return null; // This component doesn't render anything
}

// Custom hook for tracking page views
export function usePageView(path: string) {
  useEffect(() => {
    // Google Analytics page view
    if (typeof gtag !== 'undefined') {
      gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: path,
      });
    }

    // Custom analytics
    console.log('Page view:', path);
  }, [path]);
}

// Error boundary for performance monitoring
export class PerformanceErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Performance monitoring error:', error, errorInfo);
    
    // Send error to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      });
    }
  }

  render() {
    if ((this.state as any).hasError) {
      return <div>Performance monitoring temporarily unavailable</div>;
    }

    return (this.props as any).children;
  }
}
