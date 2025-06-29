"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle, AlertCircle, Mail } from "lucide-react";

const NewsletterSignup = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

    // Create a temporary form data object for EmailJS
    const templateParams = {
      user_email: email,
      subject: "Newsletter Subscription",
      message: `New newsletter subscription from: ${email}`,
      to_email: "juliusntale30@gmail.com"
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setEmail("");
          setLoading(false);
          // Auto-hide success message after 5 seconds
          setTimeout(() => setSuccess(false), 5000);
        },
        (err) => {
          console.error("Newsletter subscription error:", err);
          setError(true);
          setLoading(false);
          // Auto-hide error message after 5 seconds
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-green-600">
          Thank you for subscribing to our newsletter. You&apos;ll receive the latest updates in your inbox.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 lg:p-12 ${className}`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get the latest articles and tutorials delivered straight to your inbox. 
          No spam, just quality content about web development and technology.
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !email}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Failed to subscribe. Please try again later.</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default NewsletterSignup;
