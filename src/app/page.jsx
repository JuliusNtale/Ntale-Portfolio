"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowDown, Code2, Github, ExternalLink } from "lucide-react";
import { personalInfo, skills, featuredProjects } from "@/lib/data";
import { analytics } from "@/lib/analytics";

const Homepage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.div
      className="min-h-screen bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        />
        <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-20" />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content */}
            <motion.div 
              style={{ y: yText }}
              className="flex-1 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
                  👋 Welcome to my digital space
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Crafting Digital
                  </span>
                  <br />
                  <span className="text-foreground">
                    Experiences
                  </span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/portfolio">
                  <button 
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => analytics.buttonClick('View My Work', 'Hero Section')}
                  >
                    View My Work
                  </button>
                </Link>
                <Link href="/contact">
                  <button 
                    className="px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
                    onClick={() => analytics.buttonClick('Get In Touch', 'Hero Section')}
                  >
                    Get In Touch
                  </button>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="flex gap-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-6 scale-105" />
                <div className="relative bg-card rounded-3xl p-8 shadow-2xl">
                  <Image
                    src={personalInfo.avatar}
                    width={400}
                    height={500}
                    alt={personalInfo.name}
                    priority
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>

      {/* Skills Showcase */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technologies I Love
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.slice(0, 12).map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of some of my best work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Link href={project.githubUrl} target="_blank">
                        <Github 
                          className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" 
                          onClick={() => analytics.socialClick('GitHub')}
                        />
                      </Link>
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink 
                            className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => analytics.projectView(project.title, project.category)}
                          />
                        </Link>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/portfolio">
              <button 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => analytics.buttonClick('View All Projects', 'Featured Projects Section')}
              >
                View All Projects
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;
