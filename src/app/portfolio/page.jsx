"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense, lazy } from "react";
import { Github, ExternalLink } from "lucide-react";
import { FaGithub, FaCode, FaRocket, FaEye, FaStar } from "react-icons/fa";
import { featuredProjects } from "@/lib/data";

// Lazy load the GitHubProjects component
const GitHubProjects = lazy(() => import("@/components/GitHubProjects"));

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('github'); // Changed default to github (open source)

  const categories = ['all', 'web', 'mobile', 'desktop'];
  
  const filteredProjects = filter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === filter);

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
            Explore my collection of web development projects showcasing expertise in React, Next.js, 
            TypeScript, and full-stack development. From featured client work to open-source contributions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Commits</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-1">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Stars</div>
            </div>
          </div>
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
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
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
                          Live Demo
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
                          Code
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
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                Technologies I Work With
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: "JavaScript", color: "#f1e05a" },
                  { name: "TypeScript", color: "#2b7489" },
                  { name: "React", color: "#61dafb" },
                  { name: "Next.js", color: "#000000" },
                  { name: "Python", color: "#3572a5" },
                  { name: "Node.js", color: "#339933" },
                  { name: "HTML", color: "#e34c26" },
                  { name: "CSS", color: "#1572b6" },
                  { name: "PHP", color: "#777bb4" },
                  { name: "Java", color: "#b07219" },
                  { name: "Dart", color: "#00b4ab" },
                  { name: "Flutter", color: "#02569b" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: tech.color }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Projects Component */}
            <Suspense fallback={
              <div className="text-center py-12">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading GitHub projects...</p>
              </div>
            }>
              <GitHubProjects username="JuliusNtale" />
            </Suspense>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaRocket className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-xl mb-6 opacity-90">
            Let&apos;s collaborate and bring your ideas to life with the same quality and attention to detail 
            you see in my portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <FaCode className="mr-2" />
              View Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Why My Work Stands Out */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Why My Work Stands Out
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <FaCode className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Clean Code
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Well-structured, maintainable code with proper documentation and best practices.
              </p>
            </div>
            
            <div className="text-center p-6">
              <FaRocket className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Modern Tech
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Built with latest technologies and frameworks for optimal performance and scalability.
              </p>
            </div>
            
            <div className="text-center p-6">
              <FaEye className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                User-Focused
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Every project is designed with user experience and accessibility in mind.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
