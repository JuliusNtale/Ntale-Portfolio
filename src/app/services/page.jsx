"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
  FaShieldAlt
} from "react-icons/fa";
import { analytics } from "@/lib/analytics";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";

const Services = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState("");

  // Exchange rate (approximate)
  const exchangeRate = 2500; // 1 USD = 2500 TSH (approximate)

  const formatPrice = (usdPrice) => {
    if (selectedCurrency === "USD") {
      return `$${usdPrice.toLocaleString()}`;
    } else {
      const tshPrice = Math.round(usdPrice * exchangeRate);
      return `TSH ${tshPrice.toLocaleString()}`;
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
      ideal: "Small to medium businesses, online stores",
      icon: FaCode,
      popular: true
    },
    {
      category: "web",
      title: "Enterprise Solution",
      subtitle: "For Large Companies",
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
        "Admin panel"
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
      ideal: "Existing websites needing better visibility",
      icon: FaSearch,
      popular: false
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
      ideal: "Corporate videos, advertisements, events",
      icon: FaVideo,
      popular: false
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
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {formatPrice(pkg.price)}
                    </div>
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
