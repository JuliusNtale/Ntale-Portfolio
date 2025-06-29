"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSpinner, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { emailService } from "@/lib/emailService";
import { analytics } from "@/lib/analytics";

const ServiceQuoteForm = ({ selectedPackage = "", onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: selectedPackage,
    budget: "",
    currency: "USD",
    paymentPreference: "",
    projectDescription: "",
    timeline: "",
    additionalRequirements: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    "Starter Website",
    "Business Pro",
    "Enterprise Solution",
    "Mobile App Basic",
    "Mobile App Pro",
    "SEO Optimization",
    "Photography Package",
    "Video Production",
    "Custom Project"
  ];

  const budgetRanges = {
    USD: ["$300-800", "$800-1500", "$1500-3000", "$3000+", "Custom"],
    TSH: ["TSH 750K-2M", "TSH 2M-3.8M", "TSH 3.8M-7.5M", "TSH 7.5M+", "Custom"]
  };

  const paymentOptions = [
    "50% upfront, 50% on completion",
    "Milestone-based payments (25% each)",
    "Full payment upfront (5% discount)",
    "Monthly payment plan",
    "Discuss custom terms"
  ];

  const timelineOptions = [
    "ASAP (Rush job)",
    "1-2 weeks",
    "2-4 weeks", 
    "1-2 months",
    "2-3 months",
    "3+ months",
    "Flexible timing"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Track form submission
      analytics.track('service_quote_submitted', {
        service: formData.service,
        budget: formData.budget,
        currency: formData.currency
      });

      // Send email using unified service
      const result = await emailService.sendServiceQuote(formData);

      if (result.success) {
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            budget: "",
            currency: "USD",
            paymentPreference: "",
            projectDescription: "",
            timeline: "",
            additionalRequirements: ""
          });
          onClose && onClose();
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to send quote request');
      }

    } catch (error) {
      console.error('Error sending quote request:', error);
      setSubmitStatus('error');
      analytics.track('service_quote_error', {
        error: error.message,
        service: formData.service
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Get Your Quote</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {submitStatus === 'success' && (
            <motion.div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaCheckCircle className="mr-2" />
              🎉 Thank you! Your quote request has been sent. I&apos;ll get back to you within 24 hours with a detailed proposal.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaExclamationTriangle className="mr-2" />
              Sorry, there was an error sending your request. Please try again or contact me directly.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+255 XXX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Service Required *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Budget and Currency */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="USD">USD ($)</option>
                  <option value="TSH">TSH (Tanzanian Shilling)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges[formData.currency].map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Payment Preference */}
            <div>
              <label className="block text-sm font-medium mb-2">Payment Preference</label>
              <select
                name="paymentPreference"
                value={formData.paymentPreference}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select payment preference</option>
                {paymentOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium mb-2">Project Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((timeline) => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium mb-2">Project Description *</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe your project requirements, goals, and any specific features you need..."
              />
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-sm font-medium mb-2">Additional Requirements</label>
              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific technologies, integrations, or special requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending Quote Request...
                  </>
                ) : (
                  'Send Quote Request'
                )}
              </button>
            </div>
          </form>

          {/* Footer Info */}
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
            <p>🔒 Your information is secure and will only be used to contact you about your project.</p>
            <p>📧 I typically respond within 24 hours with a detailed proposal.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceQuoteForm;
