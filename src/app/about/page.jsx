"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Calendar, MapPin, Mail } from "lucide-react";
import { personalInfo, experiences, skills } from "@/lib/data";

const AboutPage = () => {
  const skillRef = useRef();
  const experienceRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src="/Julius.png"
                alt={personalInfo.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover object-top border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
            </div>

            <div className="space-y-4">
              <h1 className="font-bold text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About {personalInfo.name}
              </h1>

              <h2 className="text-xl md:text-2xl text-muted-foreground">
                {personalInfo.title}
              </h2>

              <div className="flex justify-center flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {personalInfo.email}
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>

          {/* SKILLS SECTION */}
          <div ref={skillRef} className="space-y-8">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isSkillRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center"
            >
              Skills & Technologies
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.slice(0, 12).map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent transition-colors"
                >
                  <div className="font-medium text-sm mb-2">{skill.name}</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isSkillRefInView ? { width: `${skill.level * 20}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {skill.level}/5
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE SECTION */}
          <div ref={experienceRef} className="space-y-8">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isExperienceRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center"
            >
              Professional Experience
            </motion.h2>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{experience.position}</h3>
                      <h4 className="text-lg font-semibold">{experience.company}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      {new Date(experience.startDate).getFullYear()} -{" "}
                      {experience.current
                        ? "Present"
                        : new Date(experience.endDate || Date.now()).getFullYear()}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SERVICES CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s turn your ideas into reality. Check out my services and get a custom quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                🚀 View Services & Pricing
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
