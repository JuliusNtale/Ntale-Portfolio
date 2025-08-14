"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaCode, 
  FaDatabase, 
  FaMobile, 
  FaSearch, 
  FaCamera, 
  FaVideo, 
  FaGlobe,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaShieldAlt,
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp,
  FaLightbulb,
  FaRocket,
  FaFire,
  FaTag
} from "react-icons/fa";
import { analytics } from "@/lib/analytics";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";

const Services = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState("");
  const [expandedService, setExpandedService] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Exchange rate (approximate)
  const exchangeRate = 2500; // 1 USD = 2500 TSH (approximate)

  // Countdown timer for promotion
  useEffect(() => {
    // Set promotion end date (7 days from now for demo - adjust as needed)
    const promotionEndDate = new Date("2025-08-01");
    promotionEndDate.setDate(promotionEndDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = promotionEndDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (usdPrice, isDiscounted = false) => {
    const finalPrice = isDiscounted ? usdPrice * 0.5 : usdPrice;
    if (selectedCurrency === "USD") {
      return {
        current: `$${finalPrice.toLocaleString()}`,
        original: isDiscounted ? `$${usdPrice.toLocaleString()}` : null
      };
    } else {
      const tshPrice = Math.round(finalPrice * exchangeRate);
      const originalTshPrice = Math.round(usdPrice * exchangeRate);
      return {
        current: `TSH ${tshPrice.toLocaleString()}`,
        original: isDiscounted ? `TSH ${originalTshPrice.toLocaleString()}` : null
      };
    }
  };

  const servicePackages = [
    // Web Development Services
    {
      category: "web",
      title: "Starter Website",
      subtitle: "Perfect for Personal & Small Business",
      price: 300,
      duration: "1-2 weeks",
      features: [
        "Up to 5 pages (Home, About, Services, Contact, Blog)",
        "Responsive mobile-friendly design",
        "Basic SEO optimization", 
        "Contact form integration",
        "Social media links",
        "1 month free support",
        "Basic analytics setup"
      ],
      detailedExplanation: {
        whatYouGet: "A professional website that looks great on phones, tablets, and computers. Your customers can easily find information about your business and contact you.",
        whyImportant: "In today's digital world, 85% of customers research businesses online before visiting. A professional website builds trust and credibility.",
        perfectFor: "New businesses, freelancers, or anyone who needs an online presence to attract customers and look professional.",
        technicalBenefits: [
          "Mobile-responsive design ensures customers can browse on any device",
          "SEO optimization helps people find you on Google searches",
          "Contact forms make it easy for customers to reach you",
          "Fast loading speeds keep visitors engaged"
        ]
      },
      ideal: "Personal portfolios, small businesses, freelancers",
      icon: FaGlobe,
      popular: false
    },
    {
      category: "web",
      title: "Business Pro",
      subtitle: "For Growing Businesses",
      price: 800,
      duration: "2-3 weeks",
      features: [
        "Up to 10 pages with custom design",
        "Advanced responsive design",
        "Full SEO optimization",
        "Contact forms + Newsletter signup",
        "Google Analytics & Search Console",
        "Content Management System (CMS)",
        "Social media integration",
        "3 months free support",
        "Basic e-commerce (up to 10 products)"
      ],
      detailedExplanation: {
        whatYouGet: "A complete business website with online store capabilities, customer management tools, and advanced marketing features to grow your business.",
        whyImportant: "Businesses with professional websites generate 40% more revenue than those without. This package includes everything needed to compete online.",
        perfectFor: "Established businesses ready to expand their online presence, capture leads, and sell products or services online.",
        technicalBenefits: [
          "Content Management System lets you update content without technical knowledge",
          "SEO optimization improves Google ranking and brings more customers",
          "E-commerce functionality allows you to sell products online 24/7",
          "Analytics tracking shows which marketing efforts bring the best results",
          "Newsletter integration helps you stay connected with customers"
        ]
      },
      ideal: "Small to medium businesses, online stores",
      icon: FaCode,
      popular: true
    },
    {
      category: "web",
      title: "Enterprise Solution",
      subtitle: "For Large Companies & E-commerce",
      price: 2000,
      duration: "4-6 weeks",
      features: [
        "Unlimited pages with custom functionality",
        "Advanced animations & interactions",
        "Full e-commerce solution",
        "User authentication & dashboard",
        "Database integration",
        "Payment gateway integration",
        "Advanced SEO & marketing tools",
        "6 months free support",
        "Performance optimization",
        "Security features",
        "Admin panel",
        "Multi-language support",
        "Advanced analytics & reporting"
      ],
      detailedExplanation: {
        whatYouGet: "A powerful, scalable website or web application with enterprise-level features, security, and performance. Perfect for serious businesses and e-commerce operations.",
        whyImportant: "Large businesses need robust, secure, and scalable solutions. This package provides enterprise-grade features that can handle high traffic and complex business processes.",
        perfectFor: "Established companies, large e-commerce stores, SaaS applications, or businesses with complex operational needs.",
        technicalBenefits: [
          "Custom functionality tailored to your specific business processes",
          "Advanced security features protect customer data and business information",
          "Payment gateway integration enables secure online transactions",
          "User dashboards provide personalized experiences for customers",
          "Performance optimization ensures fast loading even with high traffic",
          "Admin panel gives you complete control over your website and business data",
          "Multi-language support helps you reach international markets"
        ]
      },
      geoOptimization: {
        targetMarkets: ["Tanzania", "East Africa", "Kenya", "Uganda", "Rwanda", "Global"],
        localSeoFeatures: [
          "Multi-language support (English, Swahili, French)",
          "Local payment gateway integration (M-Pesa, Tigo Pesa, Airtel Money)",
          "Currency conversion and local pricing",
          "Local business schema markup",
          "Google My Business integration",
          "Regional shipping and tax calculation"
        ],
        aiOptimization: [
          "Structured data for better AI search visibility",
          "FAQ integration for AI search engines",
          "Local business optimization for AI recommendations",
          "Voice search optimization for mobile users"
        ]
      },
      ideal: "Large businesses, e-commerce platforms, SaaS",
      icon: FaDatabase,
      popular: false
    },
    
    // Mobile App Development
    {
      category: "mobile",
      title: "Mobile App Basic",
      subtitle: "Simple Mobile Application",
      price: 1200,
      duration: "3-4 weeks",
      features: [
        "Cross-platform (iOS & Android)",
        "Up to 5 screens",
        "Basic user interface",
        "Local data storage",
        "Push notifications",
        "App store submission",
        "2 months support"
      ],
      detailedExplanation: {
        whatYouGet: "A mobile app that works on both iPhone and Android phones. Perfect for simple business needs like showcasing services, collecting customer information, or basic functionality.",
        whyImportant: "Mobile apps provide direct access to your customers' phones. 90% of mobile time is spent in apps, making them more engaging than mobile websites.",
        perfectFor: "Businesses wanting to test app concepts, simple service apps, or basic customer engagement tools.",
        technicalBenefits: [
          "Cross-platform development saves money compared to separate iOS and Android apps",
          "Push notifications keep customers engaged with your business",
          "Local data storage allows the app to work even without internet",
          "App store presence increases business credibility",
          "Direct customer communication channel"
        ]
      },
      ideal: "Simple apps, MVPs, proof of concepts",
      icon: FaMobile,
      popular: false
    },
    {
      category: "mobile",
      title: "Mobile App Pro",
      subtitle: "Feature-Rich Mobile App",
      price: 2500,
      duration: "6-8 weeks",
      features: [
        "Cross-platform with native performance",
        "Unlimited screens",
        "User authentication",
        "Database integration",
        "API integrations",
        "Advanced UI/UX",
        "Push notifications",
        "Analytics integration",
        "App store optimization",
        "4 months support"
      ],
      detailedExplanation: {
        whatYouGet: "A professional, full-featured mobile app with user accounts, real-time data, advanced features, and beautiful design. Comparable to apps from major companies.",
        whyImportant: "Professional mobile apps can transform your business by automating processes, improving customer experience, and creating new revenue streams.",
        perfectFor: "Established businesses ready to leverage mobile technology for growth, customer service improvement, or new business models.",
        technicalBenefits: [
          "User authentication creates personalized experiences for each customer",
          "Database integration ensures real-time, synchronized data across all devices",
          "API integrations connect your app to existing business systems",
          "Advanced analytics show how customers use your app",
          "App store optimization helps your app rank higher in search results",
          "Native performance ensures smooth, fast user experience"
        ]
      },
      geoOptimization: {
        targetMarkets: ["Tanzania", "East Africa", "Kenya", "Uganda", "Global"],
        localFeatures: [
          "Mobile money integration (M-Pesa, Tigo Pesa, Airtel Money)",
          "Swahili and English language support",
          "Offline functionality for areas with poor internet",
          "Local SMS integration for notifications",
          "Regional app store optimization"
        ]
      },
      ideal: "Business apps, social platforms, marketplaces",
      icon: FaMobile,
      popular: true
    },

    // Digital Marketing & SEO
    {
      category: "marketing",
      title: "SEO Optimization",
      subtitle: "Boost Your Search Rankings",
      price: 400,
      duration: "2-3 weeks",
      features: [
        "Complete SEO audit",
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO fixes",
        "Google Search Console setup",
        "Local SEO optimization",
        "Content optimization",
        "Monthly progress reports",
        "3 months monitoring"
      ],
      detailedExplanation: {
        whatYouGet: "Professional optimization of your website to rank higher on Google and other search engines. More people will find your business when searching online.",
        whyImportant: "75% of people never scroll past the first page of Google results. Good SEO can increase your website traffic by 200-500% within 6 months.",
        perfectFor: "Businesses with existing websites that want more customers from Google searches, or new websites that need to be found online.",
        technicalBenefits: [
          "Keyword research identifies exactly what your customers are searching for",
          "Technical SEO fixes ensure Google can properly read and index your website",
          "Local SEO helps customers in your area find your business",
          "Content optimization improves your website's relevance for important searches",
          "Monthly reports show your progress and return on investment",
          "Google Search Console provides ongoing insights into your website's performance"
        ]
      },
      geoOptimization: {
        localSeoFeatures: [
          "Tanzania-specific keyword research and optimization",
          "Google My Business optimization for local searches",
          "Swahili and English content optimization",
          "Local citation building and directory submissions",
          "Regional competitor analysis and strategy"
        ]
      },
      ideal: "Existing websites needing better visibility",
      icon: FaSearch,
      popular: false
    },

    {
      category: "marketing",
      title: "Premium SEO + Digital Marketing",
      subtitle: "Complete Digital Growth Package",
      price: 800,
      duration: "4-6 weeks",
      features: [
        "Advanced SEO optimization",
        "Content marketing strategy",
        "Social media optimization",
        "Google Ads setup & optimization",
        "Email marketing integration",
        "Conversion rate optimization",
        "Analytics & tracking setup",
        "Competitor analysis",
        "Monthly strategy sessions",
        "6 months ongoing support"
      ],
      detailedExplanation: {
        whatYouGet: "A comprehensive digital marketing strategy that includes SEO, content marketing, social media, and paid advertising to maximize your online growth.",
        whyImportant: "Integrated digital marketing can increase leads by 300-500%. This package covers all major channels to ensure consistent growth.",
        perfectFor: "Businesses serious about digital growth, companies launching new products, or established businesses wanting to dominate their market online.",
        technicalBenefits: [
          "Multi-channel approach maximizes reach and effectiveness",
          "Conversion optimization turns more visitors into customers",
          "Advanced analytics provide detailed insights into customer behavior",
          "Competitor analysis reveals opportunities your competition is missing",
          "Email marketing automation nurtures leads into customers",
          "Google Ads provide immediate visibility while SEO builds long-term results"
        ]
      },
      geoOptimization: {
        targetMarkets: ["Tanzania", "East Africa", "Kenya", "Uganda", "Rwanda", "Global"],
        localMarketingFeatures: [
          "Multi-language content strategy (English, Swahili, French)",
          "Regional social media optimization",
          "Local influencer collaboration strategies",
          "Cross-border e-commerce optimization",
          "Regional payment method integration marketing",
          "Cultural adaptation for different East African markets"
        ],
        aiOptimization: [
          "AI-powered content optimization for better search visibility",
          "Voice search optimization for mobile users",
          "Structured data implementation for rich search results",
          "FAQ optimization for AI search engines like ChatGPT and Perplexity"
        ]
      },
      ideal: "Growing businesses, competitive markets, e-commerce",
      icon: FaSearch,
      popular: true
    },

    // Media Production
    {
      category: "media",
      title: "Photography Package",
      subtitle: "Professional Photography Services",
      price: 200,
      duration: "1 day shoot",
      features: [
        "4-hour photography session",
        "Up to 100 edited photos",
        "High-resolution images",
        "Basic retouching",
        "Online gallery",
        "Commercial usage rights",
        "Quick 48-hour delivery"
      ],
      detailedExplanation: {
        whatYouGet: "Professional photography for your business, products, events, or personal needs. All photos are professionally edited and delivered in high quality.",
        whyImportant: "Professional photos increase customer trust by 200%. Good visuals are essential for marketing, websites, and social media success.",
        perfectFor: "Businesses needing product photos, professional headshots, event coverage, or marketing materials.",
        technicalBenefits: [
          "High-resolution images work perfectly for print and digital marketing",
          "Professional editing ensures consistent, polished results",
          "Commercial usage rights allow you to use photos for business purposes",
          "Online gallery makes it easy to share and download photos",
          "Quick delivery keeps your projects on schedule"
        ]
      },
      ideal: "Events, portraits, product photography",
      icon: FaCamera,
      popular: false
    },
    {
      category: "media",
      title: "Video Production",
      subtitle: "Professional Video Content",
      price: 500,
      duration: "1-2 weeks",
      features: [
        "Full day video shoot",
        "Professional editing",
        "Up to 3 minutes final video",
        "Background music",
        "Color correction",
        "Multiple format delivery",
        "2 rounds of revisions",
        "Commercial usage rights"
      ],
      detailedExplanation: {
        whatYouGet: "Professional video production for marketing, training, events, or promotional content. Includes filming, editing, and post-production.",
        whyImportant: "Video content gets 1200% more shares than text and images combined. Professional videos can increase conversion rates by 80%.",
        perfectFor: "Businesses wanting to create promotional videos, training content, event coverage, or social media marketing videos.",
        technicalBenefits: [
          "Professional equipment ensures broadcast-quality results",
          "Color correction and editing create polished, professional appearance",
          "Multiple format delivery ensures compatibility across all platforms",
          "Background music and audio optimization improve viewer engagement",
          "Commercial usage rights allow unlimited business use"
        ]
      },
      ideal: "Corporate videos, advertisements, events",
      icon: FaVideo,
      popular: false
    },
    
    {
      category: "media",
      title: "Premium Media Production",
      subtitle: "Complete Visual Content Strategy",
      price: 1200,
      duration: "2-3 weeks",
      features: [
        "Professional photography + videography",
        "Brand story development",
        "Multi-platform content creation",
        "Drone footage (if applicable)",
        "Advanced editing and effects",
        "Social media content package",
        "Marketing materials design",
        "Brand guideline documentation",
        "6 months usage consultation",
        "Content calendar planning"
      ],
      detailedExplanation: {
        whatYouGet: "A complete visual content strategy including photography, videography, and marketing materials designed to elevate your brand across all platforms.",
        whyImportant: "Consistent, professional visual branding can increase business recognition by 80% and revenue by 23%. This comprehensive package ensures cohesive brand presentation.",
        perfectFor: "Businesses launching rebranding efforts, companies wanting professional marketing materials, or established businesses ready to elevate their visual presence.",
        technicalBenefits: [
          "Brand story development creates emotional connection with customers",
          "Multi-platform optimization ensures content works on all social media and marketing channels",
          "Professional drone footage adds unique perspective and visual appeal",
          "Brand guidelines ensure consistent visual identity across all materials",
          "Content calendar planning provides ongoing strategy for sustained engagement",
          "Advanced editing creates standout content that differentiates from competitors"
        ]
      },
      geoOptimization: {
        targetMarkets: ["Tanzania", "East Africa", "Kenya", "Uganda", "Global"],
        localContentFeatures: [
          "Cultural sensitivity and local market understanding",
          "Multi-language content creation (English, Swahili)",
          "Regional industry expertise and best practices",
          "Local talent and location sourcing",
          "Cross-cultural brand messaging strategies"
        ]
      },
      ideal: "Brand development, marketing campaigns, corporate identity",
      icon: FaVideo,
      popular: true
    }
  ];

  const paymentOptions = [
    {
      title: "Flexible Payment Terms",
      options: [
        "50% upfront, 50% on completion",
        "Milestone-based payments (25% - 25% - 25% - 25%)",
        "Full payment upfront (5% discount)",
        "Monthly payment plans for large projects"
      ]
    },
    {
      title: "Payment Methods",
      options: [
        "Bank Transfer (Tanzania & International)",
        "Mobile Money (M-Pesa, Tigo Pesa, Airtel Money)",
        "PayPal (USD payments)",
        "Wise (formerly TransferWise)",
        "Cryptocurrency (Bitcoin, USDT)"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "marketing", label: "SEO & Marketing" },
    { id: "media", label: "Media Production" }
  ];

  const filteredPackages = selectedCategory === "all" 
    ? servicePackages 
    : servicePackages.filter(pkg => pkg.category === selectedCategory);

  const handlePackageClick = (packageTitle) => {
    analytics.servicePackageViewed(packageTitle, selectedCurrency);
  };

  const handleContactClick = (packageTitle) => {
    analytics.serviceInquiry(packageTitle, selectedCurrency);
    setSelectedPackageForQuote(packageTitle);
    setShowQuoteForm(true);
  };

  return (
    <>
      <motion.div
        className="min-h-screen py-20 px-4 sm:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services & Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Professional web development, mobile apps, and media production services 
              with transparent pricing and flexible payment options.
            </p>
            
            {/* Currency Selector */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-gray-600 dark:text-gray-300">Currency:</span>
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setSelectedCurrency("USD")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    selectedCurrency === "USD"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setSelectedCurrency("TSH")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    selectedCurrency === "TSH"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  TSH (Tanzanian Shilling)
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* 50% OFF Promotion Banner */}
          <motion.div
            className="mb-12 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-2xl p-8 text-white relative">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-orange-600/90 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                {/* Fire Icon and Badge */}
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-400 text-red-600 px-4 py-2 rounded-full font-bold text-sm flex items-center animate-bounce">
                    <FaFire className="w-4 h-4 mr-2" />
                    LIMITED TIME OFFER
                  </div>
                </div>
                
                {/* Main Promotion Text */}
                <h2 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg">
                  <span className="text-yellow-300">50%</span> OFF
                </h2>
                <p className="text-xl md:text-2xl font-bold mb-2 opacity-95">
                  All Web Development & Mobile App Services
                </p>
                <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
                  Perfect time to launch your business online! Save hundreds on professional development services.
                </p>
                
                {/* Countdown Timer */}
                <div className="flex justify-center items-center mb-6 space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs opacity-80">DAYS</div>
                  </div>
                  <div className="text-2xl font-bold opacity-60">:</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs opacity-80">HOURS</div>
                  </div>
                  <div className="text-2xl font-bold opacity-60">:</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs opacity-80">MINS</div>
                  </div>
                  <div className="text-2xl font-bold opacity-60">:</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs opacity-80">SECS</div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="bg-yellow-400 text-red-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaTag className="mr-2" />
                    Claim 50% Discount
                  </button>
                  <a
                    href="https://wa.me/255653520829?text=Hi Julius! I want to claim the 50% OFF promotion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center"
                  >
                    WhatsApp Now
                  </a>
                </div>
                
                {/* Promotion Details */}
                <div className="mt-6 text-sm opacity-75">
                  <p>* Discount applies to Web Development & Mobile App packages only</p>
                  <p>* Cannot be combined with other offers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Packages Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:border-blue-500 ${
                  pkg.popular ? "border-blue-500 ring-2 ring-blue-500 ring-opacity-50" : "border-gray-200 dark:border-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => handlePackageClick(pkg.title)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg">
                    <FaStar className="inline w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <pkg.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.subtitle}</p>
                    
                    {/* Price with discount logic */}
                    {(pkg.category === "web" || pkg.category === "mobile") ? (
                      <div className="mb-2">
                        {/* Discounted Price */}
                        <div className="text-4xl font-bold text-green-600 mb-1">
                          {formatPrice(pkg.price, true).current}
                          <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-normal">
                            50% OFF
                          </span>
                        </div>
                        {/* Original Price (crossed out) */}
                        <div className="text-xl text-gray-500 line-through">
                          {formatPrice(pkg.price, true).original}
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          💰 Save {formatPrice(pkg.price * 0.5).current}!
                        </div>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {formatPrice(pkg.price).current}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <FaClock className="w-4 h-4 mr-2" />
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed Explanation Section */}
                  {pkg.detailedExplanation && (
                    <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center mb-3">
                        <FaLightbulb className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="font-semibold text-sm text-blue-800 dark:text-blue-200">Why This Matters:</span>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                        {pkg.detailedExplanation.whyImportant}
                      </p>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedService(expandedService === index ? null : index);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors"
                      >
                        {expandedService === index ? (
                          <>
                            Hide Details <FaChevronUp className="ml-1 w-3 h-3" />
                          </>
                        ) : (
                          <>
                            Learn More <FaChevronDown className="ml-1 w-3 h-3" />
                          </>
                        )}
                      </button>

                      {expandedService === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-3"
                        >
                          <div>
                            <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-2">What You&apos;ll Get:</h5>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              {pkg.detailedExplanation.whatYouGet}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-2">Perfect For:</h5>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              {pkg.detailedExplanation.perfectFor}
                            </p>
                          </div>

                          <div>
                            <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-2">Key Benefits:</h5>
                            <ul className="space-y-1">
                              {pkg.detailedExplanation.technicalBenefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaRocket className="w-3 h-3 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-xs text-blue-700 dark:text-blue-300">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* GEO Optimization Features for Premium Services */}
                          {pkg.geoOptimization && (
                            <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
                              <div className="flex items-center mb-2">
                                <FaRocket className="w-4 h-4 text-green-600 mr-2" />
                                <span className="font-semibold text-sm text-green-800 dark:text-green-200">Premium GEO Features:</span>
                              </div>
                              
                              {pkg.geoOptimization.targetMarkets && (
                                <div className="mb-2">
                                  <span className="text-xs font-medium text-green-700 dark:text-green-300">Service Areas: </span>
                                  <span className="text-xs text-green-600 dark:text-green-400">
                                    {pkg.geoOptimization.targetMarkets.join(", ")}
                                  </span>
                                </div>
                              )}

                              {pkg.geoOptimization.localSeoFeatures && (
                                <div className="mb-2">
                                  <span className="text-xs font-medium text-green-700 dark:text-green-300">Local SEO Features:</span>
                                  <ul className="mt-1 space-y-1">
                                    {pkg.geoOptimization.localSeoFeatures.map((feature, idx) => (
                                      <li key={idx} className="flex items-start">
                                        <FaCheckCircle className="w-2 h-2 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-xs text-green-600 dark:text-green-400">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {pkg.geoOptimization.aiOptimization && (
                                <div>
                                  <span className="text-xs font-medium text-green-700 dark:text-green-300">AI Search Optimization:</span>
                                  <ul className="mt-1 space-y-1">
                                    {pkg.geoOptimization.aiOptimization.map((feature, idx) => (
                                      <li key={idx} className="flex items-start">
                                        <FaRocket className="w-2 h-2 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-xs text-green-600 dark:text-green-400">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Ideal For */}
                  <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FaUsers className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-semibold text-sm">Ideal For:</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{pkg.ideal}</p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleContactClick(pkg.title)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Educational Section - Understanding Digital Services */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <FaInfoCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Understanding Digital Services for Your Business
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Not sure which service is right for you? Here&apos;s a simple guide to help you understand 
                how each digital solution can transform your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <FaGlobe className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Website Development
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>What it is:</strong> Your digital storefront that&apos;s open 24/7.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Why you need it:</strong> 81% of customers research online before buying. 
                  No website = lost customers.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Best for:</strong> Any business wanting to be found online and build credibility.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <FaMobile className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Mobile Apps
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>What it is:</strong> A dedicated app for your customers&apos; phones.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Why you need it:</strong> People spend 90% of mobile time in apps. 
                  Direct access to customers.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Best for:</strong> Businesses wanting direct customer engagement and loyalty.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <FaSearch className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  SEO & Marketing
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>What it is:</strong> Making your business easy to find on Google.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Why you need it:</strong> 68% of online experiences begin with a search engine. 
                  Be found or be forgotten.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Best for:</strong> Businesses competing for customers online.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <FaCamera className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Media Production
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>What it is:</strong> Professional photos and videos for your brand.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Why you need it:</strong> Visual content gets 94% more views. 
                  Professional visuals = professional business.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Best for:</strong> Businesses wanting to stand out and build trust.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
                <FaLightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Still Not Sure Which Service You Need?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  No problem! Most successful businesses use a combination of these services. 
                  I offer free consultations to help you understand exactly what your business needs 
                  and create a custom plan that fits your budget and goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/255653520829?text=Hi Julius, I'd like to discuss my digital needs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Information */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {paymentOptions.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <FaShieldAlt className="w-6 h-6 text-green-500 mr-3" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.options.map((option, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let&apos;s discuss your requirements and find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                onClick={() => analytics.contactFromServices()}
              >
                Get Free Consultation
                <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://wa.me/255653520829"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                onClick={() => analytics.whatsappFromServices()}
              >
                WhatsApp Chat
              </a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="p-6">
              <FaShieldAlt className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h4 className="text-xl font-semibold mb-2">100% Satisfaction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Money-back guarantee if you&apos;re not completely satisfied
              </p>
            </div>
            <div className="p-6">
              <FaClock className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h4 className="text-xl font-semibold mb-2">On-Time Delivery</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Projects completed within agreed timeframes
              </p>
            </div>
            <div className="p-6">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h4 className="text-xl font-semibold mb-2">Ongoing Support</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Free support and maintenance included with every project
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* GEO Content for AI Search Engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>Julius Peter Ntale Professional Services - Tanzania East Africa</h2>
        <p>
          Julius Peter Ntale offers comprehensive digital services in Dar es Salaam, Tanzania, 
          serving clients across East Africa and globally. Services include web development, 
          mobile app development, SEO optimization, and media production with local expertise 
          and international standards.
        </p>
        
        <h3>Web Development Services Tanzania</h3>
        <p>
          Professional website development services starting from $300 USD. Includes responsive 
          design, SEO optimization, e-commerce functionality, and content management systems. 
          Serving small businesses, enterprises, and startups across Tanzania, Kenya, Uganda, 
          Rwanda, and international markets through remote collaboration.
        </p>
        
        <h3>Mobile App Development East Africa</h3>
        <p>
          Cross-platform mobile application development for iOS and Android devices. Starting 
          from $1200 USD, includes user authentication, database integration, push notifications, 
          and app store submission. Specialized in mobile money integration (M-Pesa, Tigo Pesa, 
          Airtel Money) for East African markets.
        </p>
        
        <h3>SEO and Digital Marketing Tanzania</h3>
        <p>
          Search engine optimization and digital marketing services from $400 USD. Includes 
          keyword research, on-page optimization, local SEO for Tanzania businesses, Google 
          My Business optimization, and multi-language content strategy (English, Swahili). 
          Premium packages include AI search optimization for modern search engines.
        </p>
        
        <h3>Media Production Services</h3>
        <p>
          Professional photography and videography services starting from $200 USD. Includes 
          commercial photography, corporate videos, brand development, and multi-platform 
          content creation. Culturally sensitive content creation for East African markets 
          with international appeal.
        </p>
        
        <h3>Geographic Service Coverage</h3>
        <p>
          Primary service area: Dar es Salaam, Tanzania. Extended coverage: Nairobi Kenya, 
          Kampala Uganda, Kigali Rwanda, Bujumbura Burundi. Remote services available globally 
          with flexible timezone accommodation. Payment options include USD, Tanzanian Shilling, 
          mobile money, bank transfers, and cryptocurrency.
        </p>
        
        <h3>Premium GEO Features</h3>
        <p>
          Advanced services include AI search optimization, multi-language SEO (English, Swahili, 
          French), local payment gateway integration, voice search optimization, structured data 
          implementation, and regional market analysis. Specialized in helping East African 
          businesses reach both local and international markets.
        </p>
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <ServiceQuoteForm
          selectedPackage={selectedPackageForQuote}
          onClose={() => setShowQuoteForm(false)}
        />
      )}
    </>
  );
};

export default Services;
