"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const text = "Say Hi!";
  const form = useRef();

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY); // Initialize EmailJS
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true); // Start loading

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text); // Debug response
          setSuccess(true);
          form.current.reset();
          setLoading(false); // Stop loading after success
        },
        (err) => {
          console.log("FAILED...", err); // Debug error
          setError(true);
          setLoading(false); // Stop loading after error
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Julius Ntale,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            required
            placeholder="Write your message..."
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email" // Email input type for validation
            className="bg-transparent border-b-2 border-b-black outline-none"
            required
            placeholder="Your email address"
          />
          <span>Regards,</span>
          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send"} {/* Show loading text */}
          </button>

          {/* Success and Error Messages */}
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong. Please try again!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
