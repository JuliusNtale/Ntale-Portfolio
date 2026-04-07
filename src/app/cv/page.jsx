"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Calendar, MapPin, Mail, Phone, Award, Briefcase, GraduationCap, Download, FileText } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Link from "next/link";

const CVPage = () => {
  const educationRef = useRef();
  const trainingRef = useRef();
  const certificationsRef = useRef();
  const skillsRef = useRef();
  const refereesRef = useRef();

  const isEducationInView = useInView(educationRef, { margin: "-100px" });
  const isTrainingInView = useInView(trainingRef, { margin: "-100px" });
  const isCertificationsInView = useInView(certificationsRef, { margin: "-100px" });
  const isSkillsInView = useInView(skillsRef, { margin: "-100px" });
  const isRefereesInView = useInView(refereesRef, { margin: "-100px" });

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* HEADER SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 mb-16 pb-12 border-b border-border"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-left">
                <h1 className="font-bold text-4xl md:text-5xl mb-2">
                  {personalInfo.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                  {personalInfo.title}
                </h2>
                
                <div className="space-y-3 text-muted-foreground mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  {personalInfo.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <a href={`tel:${personalInfo.phone}`} className="hover:text-accent transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  )}
                </div>

                <Link
                  href={personalInfo.resume}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </Link>
              </div>

              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={160}
                  height={160}
                  className="w-full h-full rounded-2xl object-cover object-top border-4 border-primary/20 shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* PROFESSIONAL SUMMARY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16 pb-12 border-b border-border"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-accent" />
              Professional Summary
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* PROFESSIONAL EXPERIENCE */}
          <motion.div
            ref={trainingRef}
            initial={{ opacity: 0 }}
            animate={isTrainingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 pb-12 border-b border-border"
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isTrainingInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-accent" />
              Professional Experience
            </motion.h2>

            <div className="space-y-6">
              {/* TRA Internship */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isTrainingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">ICT Intern</h3>
                    <h4 className="text-lg font-semibold">Tanzania Revenue Authority (TRA)</h4>
                    <p className="text-sm text-muted-foreground">Headquarters, Ilala – Dar es Salaam</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap ml-4">
                    <Calendar className="w-4 h-4" />
                    2024 – 2025
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Network & Datacenter */}
                  <div className="bg-background/50 rounded-lg p-4">
                    <h5 className="font-semibold text-accent mb-2">Network & Datacenter Section</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Jul 2024 – Aug 2024</span> | Supervisor: Mr. Suleiman Suleiman
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Assisted in installation and configuration of Cisco switches, routers, and PBX systems</li>
                      <li>Worked on VLAN setups, LAN/WAN troubleshooting, and VoIP IP phone deployments</li>
                      <li>Applied concepts of SD-WAN for secure and optimized branch connectivity</li>
                    </ul>
                  </div>

                  {/* System Support */}
                  <div className="bg-background/50 rounded-lg p-4">
                    <h5 className="font-semibold text-accent mb-2">System Support Section</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Aug 2024 – Sep 2024</span> | Supervisor: Mr. Thomas
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Provided user support for hardware and software troubleshooting</li>
                      <li>Gained hands-on experience with SysAid ITSM for managing support tickets</li>
                      <li>Assisted in Windows Server administration (user accounts, device management)</li>
                    </ul>
                  </div>

                  {/* Database & Virtualization */}
                  <div className="bg-background/50 rounded-lg p-4">
                    <h5 className="font-semibold text-accent mb-2">Database & Virtualization Section</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Jul 2025 – Aug 2025</span> | Supervisor: Mr. Julius
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Learned basics of Kafka & RabbitMQ for messaging and integration</li>
                      <li>Worked with containerization (Docker & Kubernetes) for application deployment</li>
                      <li>Installed and configured the ELK Stack (Elasticsearch, Logstash, Kibana) for centralized log management</li>
                    </ul>
                  </div>

                  {/* System Development */}
                  <div className="bg-background/50 rounded-lg p-4">
                    <h5 className="font-semibold text-accent mb-2">System Development Section</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Aug 2025 – Sep 2025</span> | Supervisor: Mr. Francisco
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Learned about system and software development principles</li>
                      <li>Worked with Figma for application design</li>
                      <li>Developed Mobile App Application With Flutter</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <h5 className="font-semibold text-accent mb-2">Key Skills Acquired</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Network Monitoring (SolarWinds NPM)", "System Deployment", "Containerization", "IT Infrastructure Support", "Datacenter Management", "Technical Reporting"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            ref={educationRef}
            initial={{ opacity: 0 }}
            animate={isEducationInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 pb-12 border-b border-border"
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isEducationInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-accent" />
              Education & Qualifications
            </motion.h2>

            <div className="space-y-4">
              {[
                { institution: "University Of Dodoma", award: "Bachelor of Science in Software Engineering", year: "2022 – 2026" },
                { institution: "Msolwa Secondary School", award: "Advanced Certificate in Secondary Education", year: "2020 - 2022" },
                { institution: "Unique Academy", award: "Certificate in graphics, design and Computer", year: "2020" },
                { institution: "Njoru Driving school", award: "Certificate in acquiring driving skills", year: "2020" },
                { institution: "Libermann Secondary School", award: "Certificate of Secondary Education", year: "2016 - 2019" },
                { institution: "Tusiime Nursery and Primary School", award: "Certificate of Primary Education", year: "2012 - 2015" }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-primary">{edu.institution}</h4>
                      <p className="text-sm text-muted-foreground">{edu.award}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SKILLS & COMPETENCIES */}
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0 }}
            animate={isSkillsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 pb-12 border-b border-border"
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isSkillsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-accent" />
              Skills & Competencies
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Programming",
                  skills: ["Flutter", "JavaScript / TypeScript", "Git"]
                },
                {
                  category: "DevOps & Infrastructure",
                  skills: ["Docker", "Kubernetes", "VMware", "ELK Stack", "SD-WAN", "SolarWinds NPM"]
                },
                {
                  category: "Networking",
                  skills: ["Cisco routing & switching", "VLAN configuration", "LAN/WAN troubleshooting", "VoIP / PBX systems"]
                },
                {
                  category: "Databases",
                  skills: ["Basic database administration", "Kafka & RabbitMQ fundamentals"]
                },
                {
                  category: "Tools",
                  skills: ["Figma", "Microsoft Office", "SysAid ITSM"]
                }
              ].map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                >
                  <h4 className="font-bold text-primary mb-4">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CERTIFICATIONS */}
          <motion.div
            ref={certificationsRef}
            initial={{ opacity: 0 }}
            animate={isCertificationsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 pb-12 border-b border-border"
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isCertificationsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-accent" />
              Certifications & Awards
            </motion.h2>

            <div className="space-y-4">
              {[
                {
                  title: "Certification of Completion – Complete PBX-5 basic training",
                  issuer: "XORCOM",
                  date: "August 2023",
                  description: "Signed by: Leonid Faishtein (CTO) & Eran Gal (CEO)"
                },
                {
                  title: "Certification of Completion - Complete Introduction to Cybersecurity",
                  issuer: "Cisco Network Academy",
                  date: "2023"
                },
                {
                  title: "Certificate of National Building Army (JKT)",
                  issuer: "National Service Training Agency",
                  date: "2022"
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCertificationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-primary">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PORTFOLIO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 pb-12 border-b border-border"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-accent" />
              Portfolio
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-lg font-semibold mb-2">Founder – Neuraltale Technologies</p>
              <p className="text-muted-foreground mb-4">2024 – Present</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Provide custom web and mobile development solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Manage domain and hosting services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Deploy and maintain cloud infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Lead client technical migrations and IT audits
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.github.com/juliusntale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://juliusntale.neuraltale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Website
                </a>
              </div>
            </div>
          </motion.div>

          {/* REFEREES */}
          <motion.div
            ref={refereesRef}
            initial={{ opacity: 0 }}
            animate={isRefereesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isRefereesInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-accent" />
              References
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Eng. Manyiri Isack",
                  title: "Manager Network and Data Centre",
                  company: "TRA",
                  phone: "+255 784 227 900",
                  email: "manyiri.mabulla@tra.go.tz"
                },
                {
                  name: "Mr. Sixmund Joseph Matembo",
                  title: "Regional Human Resource Officer & Administration",
                  company: "TRA",
                  phone: "+255 768 867 437",
                  email: "sjmatembo@gmail.com"
                },
                {
                  name: "Mr. Peter John Ntale",
                  title: "Family Reference",
                  company: "Dar-es-Salaam",
                  phone: "+255 655 735 111",
                  email: "pntale98@gmail.com"
                }
              ].map((ref, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRefereesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
                >
                  <h4 className="font-bold text-primary mb-1">{ref.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {ref.title} <br />
                    {ref.company}
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      <a href={`tel:${ref.phone}`} className="hover:text-accent transition-colors">
                        {ref.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a href={`mailto:${ref.email}`} className="hover:text-accent transition-colors">
                        {ref.email}
                      </a>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DOWNLOAD SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <Link
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              <span className="text-lg font-semibold">Download Full CV (PDF)</span>
              <Download className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CVPage;
