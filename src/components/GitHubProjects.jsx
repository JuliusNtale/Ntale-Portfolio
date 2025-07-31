"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaStar, 
  FaCodeBranch, 
  FaCalendarAlt,
  FaSpinner
} from "react-icons/fa";

// Cache for GitHub API results
const CACHE_KEY = 'github_projects_cache';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

const GitHubProjects = ({ username = "JuliusNtale" }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoized language colors for performance
  const languageColors = useMemo(() => ({
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572a5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#1572b6",
    React: "#61dafb",
    "Next.js": "#000000",
    Node: "#339933",
    PHP: "#777bb4",
    Go: "#00add8",
    Rust: "#dea584",
    Swift: "#ffac45",
    Kotlin: "#f18e33",
    Dart: "#00b4ab",
    Vue: "#4fc08d",
    Angular: "#dd0031",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#239120"
  }), []);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setProjects(data);
            setLoading(false);
            return;
          }
        }
        
        // Add small delay to prevent blocking the UI thread
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Use our API route that handles GitHub token server-side
        const response = await fetch('/api/github/repos');
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const repos = await response.json();
        
        // The API route already filters and transforms the data
        const formattedProjects = repos.map(repo => ({
          ...repo,
          updated: new Date(repo.updated).toLocaleDateString(),
          liveUrl: repo.homepage || null,
        }));
        
        // Cache the results
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: formattedProjects,
          timestamp: Date.now()
        }));
        
        setProjects(formattedProjects);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          console.error("Error fetching GitHub projects:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, [username]);

  // Optimized language color function
  const getLanguageColor = (language) => {
    return languageColors[language] || "#6b7280";
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <FaSpinner className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
        <p className="text-gray-600 dark:text-gray-300">Loading GitHub projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-600 dark:text-red-400 mb-2">Error loading projects:</p>
          <p className="text-red-500 dark:text-red-300 text-sm">{error}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Don&apos;t worry! You can still view my projects directly on{" "}
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-lg">
          <div className="text-2xl font-bold text-blue-600">{projects.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Public Repos</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-lg">
          <div className="text-2xl font-bold text-yellow-600">
            {projects.reduce((sum, project) => sum + project.stars, 0)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Stars</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-lg">
          <div className="text-2xl font-bold text-green-600">
            {projects.reduce((sum, project) => sum + project.forks, 0)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Forks</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-lg">
          <div className="text-2xl font-bold text-purple-600">
            {projects.filter((project, index, self) => 
              project.language && self.findIndex(p => p.language === project.language) === index
            ).length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-6">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
                {project.isPrivate && (
                  <div className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    Private
                  </div>
                )}
              </div>

              {/* Technologies/Topics */}
              {project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                  {project.topics.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.topics.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Project Stats */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  {project.language && (
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: getLanguageColor(project.language) }}
                      ></div>
                      <span>{project.language}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <FaStar className="w-3 h-3 mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCodeBranch className="w-3 h-3 mr-1" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>

              {/* Updated Date */}
              <div className="flex items-center text-xs text-gray-400 mb-4">
                <FaCalendarAlt className="w-3 h-3 mr-1" />
                <span>Updated {project.updated}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More on GitHub */}
      <div className="text-center mt-8">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-900 dark:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
        >
          <FaGithub className="w-5 h-5 mr-2" />
          View All Projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default GitHubProjects;
