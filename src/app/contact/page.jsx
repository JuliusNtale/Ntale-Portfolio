"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setLoading(false);
        },
        (err) => {
          console.error("Email sending error:", err);
          setError(true);
          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "juliusntale30@gmail.com",
      href: "mailto:juliusntale30@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+255 653 520 829",
      href: "tel:+255653520829"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dar es Salaam, Tanzania",
      href: "#"
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Let&apos;s Work{" "}
            <span className="text-primary">Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can 
            bring your ideas to life with cutting-edge technology and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you&apos;re looking to build a new application, enhance an existing project, 
                or just want to say hello, I&apos;m always excited to connect with fellow creators and innovators.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/JuliusNtale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/julius-ntale-aa08902b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/am.jhey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/julius.ntale.18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Facebook
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 p-8 bg-card rounded-xl border border-border shadow-sm"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="user_subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="user_subject"
                  name="user_subject"
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="user_message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="user_message"
                  name="user_message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success/Error Messages */}
              {success && (
                <motion.div
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Oops! Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
