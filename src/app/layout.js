import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WebVitalsTracker from "@/components/WebVitalsTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julius Ntale - Full-Stack Developer & Media Producer",
  description: "Passionate full-stack developer with expertise in modern web technologies and a unique background in media production. Creating engaging digital experiences with React, Next.js, and cutting-edge technologies.",
  keywords: "Julius Ntale, Full-Stack Developer, React, Next.js, Web Development, Media Production, Uganda Developer",
  author: "Julius Ntale",
  openGraph: {
    title: "Julius Ntale - Full-Stack Developer & Media Producer",
    description: "Creating engaging digital experiences with modern web technologies",
    type: "website",
    locale: "en_US",
    siteName: "Julius Ntale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julius Ntale - Full-Stack Developer",
    description: "Creating engaging digital experiences with modern web technologies",
  },
};

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
          <TransitionProvider>{children}</TransitionProvider>
          <Analytics />
          <SpeedInsights />
          <WebVitalsTracker />
        </ThemeProvider>
      </body>
    </html>
  );
}

