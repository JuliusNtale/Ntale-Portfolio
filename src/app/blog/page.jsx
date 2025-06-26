"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock blog data - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Next.js 14",
      excerpt: "Explore the latest features in Next.js 14 and learn how to build performant, scalable React applications with the new App Router.",
      category: "Frontend",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/images/blog/nextjs-14.jpg",
      slug: "building-scalable-react-applications-nextjs-14"
    },
    {
      id: 2,
      title: "The Future of Web Development: React Server Components",
      excerpt: "Dive deep into React Server Components and understand how they're revolutionizing the way we think about server-side rendering.",
      category: "React",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "/images/blog/react-server-components.jpg",
      slug: "future-web-development-react-server-components"
    },
    {
      id: 3,
      title: "Optimizing Web Performance with Modern Tools",
      excerpt: "Learn about the latest tools and techniques for optimizing web performance, from Core Web Vitals to advanced bundling strategies.",
      category: "Performance",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/images/blog/web-performance.jpg",
      slug: "optimizing-web-performance-modern-tools"
    },
    {
      id: 4,
      title: "TypeScript Best Practices for Large Applications",
      excerpt: "Discover TypeScript patterns and practices that scale well for large applications and improve developer experience.",
      category: "TypeScript",
      date: "2023-12-28",
      readTime: "15 min read",
      image: "/images/blog/typescript-best-practices.jpg",
      slug: "typescript-best-practices-large-applications"
    },
    {
      id: 5,
      title: "Creating Beautiful UIs with Tailwind CSS and Framer Motion",
      excerpt: "Master the art of creating stunning, animated user interfaces using Tailwind CSS and Framer Motion.",
      category: "Design",
      date: "2023-12-20",
      readTime: "6 min read",
      image: "/images/blog/tailwind-framer-motion.jpg",
      slug: "beautiful-uis-tailwind-css-framer-motion"
    },
    {
      id: 6,
      title: "Full-Stack Development with Next.js and Prisma",
      excerpt: "Build a complete full-stack application using Next.js API routes and Prisma ORM for database management.",
      category: "Full Stack",
      date: "2023-12-15",
      readTime: "20 min read",
      image: "/images/blog/nextjs-prisma.jpg",
      slug: "fullstack-development-nextjs-prisma"
    }
  ];

  const categories = ["All", "Frontend", "React", "Performance", "TypeScript", "Design", "Full Stack"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

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
            Latest <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, 
            and the craft of building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(post.date)}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-20 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest articles and tutorials delivered straight to your inbox. 
              No spam, just quality content about web development and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
