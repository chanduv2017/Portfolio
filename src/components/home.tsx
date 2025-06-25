import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme } = useTheme();

  // Skills data
  const skills = [
    { name: "React", color: "bg-blue-100 text-blue-800" },
    { name: "JavaScript", color: "bg-blue-100 text-blue-800" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", color: "bg-green-100 text-green-800" },
    { name: "Express.js", color: "bg-green-100 text-green-800" },
    
    { name: "Docker", color: "bg-sky-100 text-sky-800" },
    { name: "Kubernetes", color: "bg-sky-100 text-sky-800" },
    { name: "Java", color: "bg-red-100 text-red-800" },
    { name: "SQL", color: "bg-red-100 text-red-800" },
    { name: "C++", color: "bg-gray-100 text-gray-800" },
    { name: "Angular", color: "bg-green-100 text-green-800" },
    { name: "Spring Boot", color: "bg-green-100 text-green-800" },
    { name: "Python", color: "bg-yellow-100 text-yellow-800" },
    { name: "Machine learning", color: "bg-yellow-100 text-yellow-800" },
    { name: "Tensorflow", color: "bg-purple-100 text-purple-800" },
    { name: "Pytorch", color: "bg-purple-100 text-purple-800" },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "MenuMagic",
      description:
        "A full-stack Restaurant application built with React, Node.js, and MongoDB",
      image:
        "projectImg/MenuMagic.png",
      technologies: ["React", "Node.js", "MongoDB", "Express","TypeScript"],
      liveDemo: "",
      github: "https://github.com/chanduv2017/MenuMagic-Frontend",
      fullDescription:
        "A full-featured food ordering application with user authentication, restaurant and menu browsing, real-time cart updates, secure checkout, and order tracking. Developed using React for the frontend, Node.js and Express for the backend API, and MongoDB for persistent data storage. Integrates payment gateways for seamless transactions and supports role-based access for customers, restaurant owners, and administrators.",
    },
    {
      id: 2,
      title: "LinguaLink",
      description:
        "A full stack web application for multilingual voice and text translation",
      image:
        "projectImg/LinguaLink.png",
      technologies: ["React", "Node.js", "MongoDB", "Express","TypeScript", "LLM","Flask"],
      liveDemo: "",
      github: "https://github.com/chanduv2017/LinguaLink-Frontend",
      fullDescription:
        "LinguaLink is an innovative web application built using modern technologies like React, TypeScript, Node.js, MongoDB, and large language models (LLMs). The platform offers seamless voice and text translation services across up to four languages, making it an essential tool for cross-lingual communication. Users can interact with LinguaLink to either speak or type in one language and receive translations in their preferred output language, whether for personal, educational, or professional use.",
    },
    {
      id: 3,
      title: "Horizon",
      description: "A modern, scalable blog platform with a focus on performance and aesthetics",
      image:
        "projectImg/Horizon.png",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript", "postgreSQL", "Prisma", "Hono"],
      liveDemo: "https://horizon-frontend-ten.vercel.app/",
      github: "https://github.com/chanduv2017/Horizonfrontend",
      fullDescription:
        "Horizon is a modern, scalable blog platform designed to provide users with a seamless content creation and reading experience. Built using a robust tech stack that includes React, Tailwind CSS, Cloudflare Workers, Hono web framework, Prisma ORM, PostgreSQL, and Node.js, Horizon focuses on delivering high performance, scalability, and aesthetic appeal.",
    },
    // {
    //   id: 4,
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media performance tracking",
    //   image:
    //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    //   technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    //   liveDemo: "https://example.com/demo4",
    //   github: "https://github.com/username/project4",
    //   fullDescription:
    //     "A comprehensive analytics dashboard for tracking social media performance across multiple platforms. Features include data visualization with D3.js, custom reporting, and automated insights.",
    // },
    // {
    //   id: 5,
    //   title: "Smart Home IoT System",
    //   description: "IoT system for home automation using Raspberry Pi",
    //   image:
    //     "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    //   technologies: ["Python", "Raspberry Pi", "MQTT", "React Native"],
    //   liveDemo: "https://example.com/demo5",
    //   github: "https://github.com/username/project5",
    //   fullDescription:
    //     "A smart home automation system built with Raspberry Pi devices, MQTT for communication, Python for backend logic, and React Native for the mobile app interface. Features include lighting control, temperature monitoring, and security integration.",
    // },
    // {
    //   id: 6,
    //   title: "Financial Planning App",
    //   description:
    //     "Personal finance management application with budgeting tools",
    //   image:
    //     "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80",
    //   technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    //   liveDemo: "https://example.com/demo6",
    //   github: "https://github.com/username/project6",
    //   fullDescription:
    //     "A comprehensive personal finance management application with budgeting tools, expense tracking, financial goal setting, and visualization of spending patterns using Chart.js.",
    // },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      if (heroSection && scrollPosition < heroSection.offsetHeight) {
        setActiveSection("hero");
      } else if (
        aboutSection &&
        scrollPosition <
          aboutSection.offsetTop + aboutSection.offsetHeight - 100
      ) {
        setActiveSection("about");
      } else if (
        experienceSection &&
        scrollPosition <
          experienceSection.offsetTop + experienceSection.offsetHeight - 100
      ) {
        setActiveSection("experience");
      } else if (
        projectsSection &&
        scrollPosition <
          projectsSection.offsetTop + projectsSection.offsetHeight - 100
      ) {
        setActiveSection("projects");
      } else if (contactSection) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <HeroSection onCTAClick={() => scrollToSection("projects")} />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30 dark:bg-muted/10 transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <motion.div
                className="rounded-full overflow-hidden aspect-square w-48 md:w-64 mx-auto border-4 border-primary/20 shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="dp3.jpg"
                  alt="Developer Profile"
                  className="w-full h-full object-[0%_25%] object-cover"
                />
              </motion.div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">Chandra Sekhar Vattem</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                I'm a full-stack developer with experience in
                building web applications. I specialize in creating
                scalable, high-performance solutions using modern technologies.
                My background includes work in e-commerce and
                AI-driven applications.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                I'm passionate about clean code, user experience, and staying on
                the cutting edge of technology. When I'm not coding, you can
                find me travelling, reading tech blogs, or finding ideas.
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer shadow-sm"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-text"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 md:px-8 lg:px-16 bg-background transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Experience
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            My professional journey and key accomplishments in software
            development.
          </p>

          {/* Timeline Container */}
          <div className="hidden md:block relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 h-full rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Experience Item 1 - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {/* Year Badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg border-4 border-background">
                    2025
                  </div>
                </div>

                {/* Content Card - Left */}
                <div className="w-5/12 pr-8">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 shadow-xl hover:border-primary/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Software Engineer Intern
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      EPAM Systems
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      Development of enterprise-scale web applications. Architected serverless and microservices
                      infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "TypeScript", "AWS","Tailwind","Kubernetes"].map(
                        (tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for right side */}
                <div className="w-5/12"></div>
              </motion.div>

              {/* Experience Item 2 - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {/* Year Badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg border-4 border-background">
                    2017
                  </div>
                </div>

                {/* Empty space for left side */}
                <div className="w-7/12"></div>

                {/* Content Card - Right */}
                <div className="w-5/12 pl-8">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 shadow-xl hover:border-primary/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Part-time Youtuber
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Youtube
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      Produced mobile gaming and tech content, building a community of over 8,000 followers and achieving 2 million views. 
                      Gained hands-on experience in video editing, production, and audience engagement.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Kinemaster", "Filmora", "Photoshop"].map(
                        (tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Experience Item 3 - Left Side */}
              {/* <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg border-4 border-background">
                    2018
                  </div>
                </div>

                
                <div className="w-5/12 pr-8">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 shadow-xl hover:border-primary/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Junior Software Developer
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      StartupXYZ
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      Built web applications from scratch and contributed to the
                      company's core product. Gained experience in agile
                      development and cross-functional collaboration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "Vue.js", "Node.js", "MongoDB"].map(
                        (tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </motion.div>
                </div>

                
                <div className="w-5/12"></div>
              </motion.div> */}
            </div>

            {/* Timeline Dots */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-32">
              <div className="w-4 h-4 bg-primary rounded-full shadow-lg border-4 border-background"></div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-80">
              <div className="w-4 h-4 bg-primary rounded-full shadow-lg border-4 border-background"></div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-32">
              <div className="w-4 h-4 bg-primary rounded-full shadow-lg border-4 border-background"></div>
            </div>
          </div>

          {/* Mobile Timeline - Stacked Layout */}
          <div className="md:hidden space-y-8">
            {[
              {
                year: "2025",
                title: "Software Engineer Intern",
                company: "EPAM Systems",
                description:
                  "development of enterprise-scale web applications. Architected serverless and microservices infrastructure.",
                technologies: ["React", "Node.js", "TypeScript", "AWS","Tailwind","Kubernetes"],
              },
              {
                year: "2017",
                title: "Part-time Youtuber",
                company: "Youtube",
                description:
                  "Produced mobile gaming and tech content, building a community of over 8,000 followers and achieving 2 million views. Gained hands-on experience in video editing, production, and audience engagement.",
                technologies: ["Kinemaster", "Filmora", "Photoshop"],
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold text-sm">
                      {item.year}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-semibold text-foreground mb-3">
                    {item.company}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/5 transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My Projects
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Here are some of my recent projects. Click on any project to learn
            more about it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  thumbnail={project.image}
                  technologies={project.technologies}
                  demoLink={project.liveDemo}
                  githubLink={project.github}
                  fullDescription={project.fullDescription}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30 dark:bg-muted/10 transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p> */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/20 dark:bg-muted/5 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chandu. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              { href: "https://github.com/chanduv2017", icon: "github", label: "GitHub" },
              {
                href: "https://linkedin.com/in/chandrasekharvattem",
                icon: "linkedin",
                label: "LinkedIn",
              },
              {
                href: "https://twitter.com",
                icon: "twitter",
                label: "Twitter",
              },
            ].map((social, index) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon === "github" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                )}
                {social.icon === "linkedin" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                {/* {social.icon === "twitter" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                )} */}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
