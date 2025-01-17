"use client"; 
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const text = "Say Hi!";
  const form = useRef();

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
        () => {
          setSuccess(true);
          form.current.reset();
          setLoading(false); // Stop loading after success
        },
        (err) => {
          console.error("Email sending error:", err); // Log specific error
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
      <div className="h-full overflow-scroll flex flex-col gap-12 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2.5, // Slightly faster for responsiveness
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊😁
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-base sm:text-lg md:text-xl flex flex-col gap-6 sm:gap-8 justify-center p-8 sm:p-16 lg:p-24"
        >
          <span>Dear Julius Ntale,</span>
          <textarea
            rows={6}
            className="w-full bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Write your message..."
          />
          <label htmlFor="user_email">My email address is:</label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            className="w-full bg-transparent border-b-2 border-b-black outline-none"
            required
            placeholder="Your email address"
          />

          <span>Regards</span>
          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-sm sm:text-base md:text-lg text-gray-600 py-2 sm:py-3 px-6"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send"} {/* Show loading text */}
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong! Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
