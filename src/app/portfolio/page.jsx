"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Github, ExternalLink, Calendar, Code2 } from "lucide-react";
import { featuredProjects } from "@/lib/data";

const PortfolioPage = () => {
  const ref = useRef();
  const [filter, setFilter] = useState('all');

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const categories = ['all', 'web', 'mobile', 'desktop'];
  
  const filteredProjects = filter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === filter);

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden" ref={ref}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative z-10 w-screen h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My Works
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A collection of projects that showcase my passion for creating 
              innovative digital experiences and solving real-world problems.
            </motion.p>
            
            {/* Project Categories Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Showcase */}
      <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-primary/10 to-accent/10" />
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-background via-accent/5 to-background relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 text-foreground max-w-6xl mx-auto px-8">
                {/* Project Info */}
                <div className="flex flex-col gap-6 lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                        {project.category.toUpperCase()}
                      </span>
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(project.startDate).getFullYear()}
                      </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                      {project.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-4">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </Link>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>
                
                {/* Project Image */}
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[420px] group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-2xl shadow-2xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Do you have a project?
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new challenges.
          </motion.p>
        </div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="currentColor" className="text-primary">
              <textPath xlinkHref="#circlePath" className="text-xl font-medium">
                Full-Stack Developer • UI/UX Designer • Problem Solver • 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/services"
            className="w-20 h-20 md:w-32 md:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg md:text-xl font-bold hover:bg-primary/90 transition-colors shadow-2xl group"
          >
            <span className="group-hover:scale-110 transition-transform">
              Hire Me
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
