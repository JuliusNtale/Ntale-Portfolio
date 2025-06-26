"use client";

import { useReportWebVitals } from 'next/web-vitals';
import { performanceTracking } from '@/lib/analytics';

export function WebVitalsTracker() {
  useReportWebVitals((metric) => {
    // Track Core Web Vitals to Vercel Analytics
    performanceTracking.trackWebVitals(metric);
    
    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric);
    }
  });

  return null; // This component doesn't render anything
}

export default WebVitalsTracker;
