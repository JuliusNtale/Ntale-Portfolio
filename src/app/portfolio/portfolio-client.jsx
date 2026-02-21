"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense, lazy, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { FaGithub, FaCode, FaRocket, FaStar, FaSpinner } from "react-icons/fa";
import { featuredProjects } from "@/lib/data";

// Lazy load the GitHubProjects component
const GitHubProjects = lazy(() => import("@/components/GitHubProjects"));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="flex flex-col items-center space-y-4">
      <FaSpinner className="animate-spin text-4xl text-blue-600" />
      <p className="text-gray-600 dark:text-gray-400">Loading GitHub projects...</p>
    </div>
  </div>
);

const PortfolioClient = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      className="min-h-screen py-20 px-4 sm:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio & Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Real production projects built for companies and platforms, alongside open-source work on GitHub.
          </p>

          <Link
            href="https://github.com/JuliusNtale"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-xl hover:opacity-90 transition"
          >
            <FaGithub className="w-4 h-4" />
            View GitHub Profile
          </Link>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-1.5 flex shadow-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('github')}
              className={`px-4 sm:px-6 py-3 sm:py-3 rounded-lg transition-all duration-300 font-medium relative min-h-[48px] touch-manipulation ${
                activeTab === 'github'
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <FaGithub className="inline w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Open Source Projects</span>
              <span className="sm:hidden">Open Source</span>
              {activeTab === 'github' && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 sm:px-6 py-3 sm:py-3 rounded-lg transition-all duration-300 font-medium relative min-h-[48px] touch-manipulation ${
                activeTab === 'featured'
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <FaStar className="inline w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Featured Work</span>
              <span className="sm:hidden">Featured</span>
              {activeTab === 'featured' && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        {activeTab === 'featured' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} homepage preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-gray-900/90 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
                        Completed
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 min-h-[56px]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[84px]">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center touch-manipulation min-h-[44px] active:scale-95"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-3 px-4 rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 flex items-center justify-center touch-manipulation min-h-[44px] active:scale-95"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* GitHub Projects Section */}
        {activeTab === 'github' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Technology Stack */}
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                Open Source & Pinned Repositories
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore selected GitHub repositories that showcase implementation quality, architecture choices, and ongoing engineering work.
              </p>
            </div>

            {/* GitHub Projects Component */}
            <Suspense fallback={<LoadingSpinner />}>
              {isClient && <GitHubProjects username="JuliusNtale" />}
            </Suspense>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let&apos;s work together to bring your ideas to life with cutting-edge technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 py-3 px-8 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 flex items-center touch-manipulation min-h-[48px] active:scale-95"
            >
              <FaRocket className="mr-2" />
              Start a Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white py-3 px-8 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center touch-manipulation min-h-[48px] active:scale-95"
            >
              <FaCode className="mr-2" />
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioClient;
