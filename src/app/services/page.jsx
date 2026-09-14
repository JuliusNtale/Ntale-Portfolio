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
  FaFire,
  FaTag,
  FaCoins
} from "react-icons/fa";
import { analytics } from "@/lib/analytics";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";

const Services = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("TSH");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState("");
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

  // costBreakdown items always sum to the package's base price (pre-discount),
  // since the promo discount comes out of margin, not out of real delivery costs.
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
      costBreakdown: [
        { label: "Hosting & Domain (1 yr)", amount: 40 },
        { label: "Design & Development", amount: 180 },
        { label: "Testing & Launch", amount: 50 },
        { label: "Support (1 month)", amount: 30 }
      ],
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
      costBreakdown: [
        { label: "Hosting & Backend Services (1 yr)", amount: 80 },
        { label: "CMS & E-commerce Setup", amount: 120 },
        { label: "Design & Development", amount: 450 },
        { label: "Testing & QA", amount: 80 },
        { label: "Support (3 months)", amount: 70 }
      ],
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
      costBreakdown: [
        { label: "Cloud Hosting & Infrastructure (1 yr)", amount: 200 },
        { label: "Database & Backend Microservices", amount: 350 },
        { label: "Payment Gateway & Security", amount: 200 },
        { label: "Design & Development", amount: 950 },
        { label: "Testing & QA", amount: 150 },
        { label: "Support (6 months)", amount: 150 }
      ],
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
      costBreakdown: [
        { label: "App Store Fees & Hosting", amount: 100 },
        { label: "Push Notification & Data Services", amount: 100 },
        { label: "Development (iOS & Android)", amount: 800 },
        { label: "Testing & QA", amount: 100 },
        { label: "Support (2 months)", amount: 100 }
      ],
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
      costBreakdown: [
        { label: "Backend Hosting & API Microservices", amount: 300 },
        { label: "Database & Auth Services", amount: 250 },
        { label: "Development (iOS & Android)", amount: 1450 },
        { label: "Testing & QA", amount: 250 },
        { label: "Support (4 months)", amount: 250 }
      ],
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
      costBreakdown: [
        { label: "SEO Tools & Software", amount: 60 },
        { label: "Audit & Strategy", amount: 150 },
        { label: "Optimization & Implementation", amount: 140 },
        { label: "Monitoring & Reports (3 months)", amount: 50 }
      ],
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
      costBreakdown: [
        { label: "Tools & Ad Platform Setup", amount: 120 },
        { label: "Strategy & Content Planning", amount: 200 },
        { label: "Campaign Execution & Optimization", amount: 330 },
        { label: "Monitoring & Reports (6 months)", amount: 150 }
      ],
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
      costBreakdown: [
        { label: "Equipment & Location", amount: 40 },
        { label: "Photography Session", amount: 80 },
        { label: "Editing & Retouching", amount: 60 },
        { label: "Gallery & Delivery", amount: 20 }
      ],
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
      costBreakdown: [
        { label: "Equipment & Crew", amount: 120 },
        { label: "Filming Session", amount: 150 },
        { label: "Editing & Post-production", amount: 180 },
        { label: "Licensing & Delivery", amount: 50 }
      ],
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
      costBreakdown: [
        { label: "Equipment, Crew & Location", amount: 250 },
        { label: "Photography & Videography Sessions", amount: 350 },
        { label: "Editing, Effects & Post-production", amount: 400 },
        { label: "Brand Strategy & Planning", amount: 150 },
        { label: "Delivery & Licensing", amount: 50 }
      ],
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

                  {/* Where Your Money Goes - itemized cost breakdown */}
                  {pkg.costBreakdown && (
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-3">
                        <FaCoins className="w-4 h-4 text-amber-500 mr-2" />
                        <span className="font-semibold text-sm">Where Your Money Goes:</span>
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.costBreakdown.map((item, idx) => (
                          <li key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-300">{item.label}</span>
                            <span className="font-medium text-gray-800 dark:text-gray-100">{formatPrice(item.amount).current}</span>
                          </li>
                        ))}
                        <li className="flex items-center justify-between text-sm font-semibold border-t border-gray-200 dark:border-gray-700 pt-2 mt-1">
                          <span>Total</span>
                          <span>{formatPrice(pkg.price).current}</span>
                        </li>
                      </ul>
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
