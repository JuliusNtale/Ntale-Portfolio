"use client";
import emailjs from "@emailjs/browser";

// Unified email service for all forms
class EmailService {
  constructor() {
    this.serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    this.templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    this.publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  }

  // Diagnose configuration
  diagnose() {
    return {
      serviceId: this.serviceId ? "✅ Configured" : "❌ Missing",
      templateId: this.templateId ? "✅ Configured" : "❌ Missing",
      publicKey: this.publicKey ? "✅ Configured" : "❌ Missing",
      emailjsLoaded: typeof emailjs !== 'undefined' ? "✅ Loaded" : "❌ Not loaded"
    };
  }

  // Service Quote Request
  async sendServiceQuote(formData) {
    const templateParams = {
      inquiry_type: "SERVICE_QUOTE",
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      service: formData.service,
      budget: formData.budget,
      currency: formData.currency,
      payment_preference: formData.paymentPreference,
      project_description: formData.projectDescription,
      timeline: formData.timeline,
      additional_requirements: formData.additionalRequirements || "None",
      subject: `🎯 SERVICE QUOTE: ${formData.service}`,
      message: `Service Quote Request for ${formData.service}`,
      priority: "HIGH",
      source: "Services Page Quote Form",
      date: new Date().toLocaleDateString(),
      to_name: "Julius Ntale"
    };

    return this.sendEmail(templateParams);
  }

  // General Contact Form
  async sendContactMessage(formData) {
    const templateParams = {
      inquiry_type: "CONTACT",
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      subject: `💬 CONTACT: ${formData.subject || 'General Inquiry'}`,
      message: formData.message,
      priority: "MEDIUM",
      source: "Contact Page Form",
      date: new Date().toLocaleDateString(),
      to_name: "Julius Ntale"
    };

    return this.sendEmail(templateParams);
  }

  // Newsletter Subscription
  async sendNewsletterSubscription(email) {
    const templateParams = {
      inquiry_type: "NEWSLETTER",
      user_name: "Newsletter Subscriber",
      user_email: email,
      subject: `📧 NEWSLETTER: New Subscription`,
      message: `New newsletter subscription from: ${email}`,
      priority: "LOW",
      source: "Newsletter Signup Form",
      date: new Date().toLocaleDateString(),
      to_name: "Julius Ntale"
    };

    return this.sendEmail(templateParams);
  }

  // Consultation Request
  async sendConsultationRequest(formData) {
    const templateParams = {
      inquiry_type: "CONSULTATION",
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      subject: `🤝 CONSULTATION: ${formData.consultationType || 'General Consultation'}`,
      message: formData.details || 'No additional details provided',
      priority: "HIGH",
      source: "Consultation Request Form",
      date: new Date().toLocaleDateString(),
      to_name: "Julius Ntale"
    };

    return this.sendEmail(templateParams);
  }

  // Generic email sender
  async sendEmail(templateParams) {
    // Check if configuration is missing
    if (!this.serviceId || !this.templateId || !this.publicKey) {
      const missing = [];
      if (!this.serviceId) missing.push('NEXT_PUBLIC_SERVICE_ID');
      if (!this.templateId) missing.push('NEXT_PUBLIC_TEMPLATE_ID');
      if (!this.publicKey) missing.push('NEXT_PUBLIC_PUBLIC_KEY');
      
      return {
        success: false,
        error: `Missing environment variables: ${missing.join(', ')}. Please check your .env.local file.`
      };
    }

    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );
      
      // Log successful submission
      console.log('Email sent successfully:', response);
      
      return {
        success: true,
        response
      };
    } catch (error) {
      console.error('Email sending failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Create a singleton instance
const emailService = new EmailService();

// Helper function for quick access
const sendUnifiedEmail = async (type, data) => {
  switch (type) {
    case 'service_quote':
      return await emailService.sendServiceQuote(data);
    case 'contact':
      return await emailService.sendContactMessage(data);
    case 'newsletter':
      return await emailService.sendNewsletterSubscription(data);
    case 'consultation':
      return await emailService.sendConsultationRequest(data);
    default:
      throw new Error(`Unknown email type: ${type}`);
  }
};

export { EmailService, emailService, sendUnifiedEmail };