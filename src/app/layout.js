import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import FloatingServicesButton from "@/components/FloatingServicesButton";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { generateSEO, generatePersonStructuredData, generateWebsiteStructuredData, generateProfessionalServiceStructuredData, generateGEOOptimizedData, generateExpertiseData, generateFAQData } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generateSEO();

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {/* Enhanced Structured Data for GEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generatePersonStructuredData()),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateWebsiteStructuredData()),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateProfessionalServiceStructuredData()),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateGEOOptimizedData()),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateExpertiseData()),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateFAQData()),
            }}
          />
          
          <TransitionProvider>{children}</TransitionProvider>
          <FloatingServicesButton />
          <GoogleAnalytics />
          <Analytics />
          <SpeedInsights />
          <WebVitalsTracker />
        </ThemeProvider>
      </body>
    </html>
  );
}

