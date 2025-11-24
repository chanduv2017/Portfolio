import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "../contexts/ThemeContext";
import BackToTopButton from "./BackToTopButton";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Github, Instagram, Linkedin, Mail, MapPin, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import { FlipWords } from "./ui/flip-words";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme } = useTheme();

  // Skills data - Updated with icons
  const skills = [
    //https://github.com/devicons/devicon/blob/master/icons/
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "MenuMagic",
      description:
        "A full-stack Restaurant application built with React, Node.js, and MongoDB",
      image: "projectImg/MenuMagic.png",
      technologies: [
        "React",
        "Tailwind",
        "MongoDB",
        "Express.js",
        "TypeScript",
      ],
      liveDemo: "",
      github: import.meta.env.VITE_GITHUB + "/MenuMagic-Frontend",
      fullDescription:
        "A full-featured food ordering application with user authentication, restaurant and menu browsing, real-time cart updates, secure checkout, and order tracking. Developed using React for the frontend, Node.js and Express for the backend API, and MongoDB for persistent data storage. Integrates payment gateways for seamless transactions and supports role-based access for customers, restaurant owners, and administrators.",
    },
    {
      id: 2,
      title: "LinguaLink",
      description:
        "A full stack web application for multilingual voice and text translation",
      image: "projectImg/LinguaLink.png",
      technologies: [
        "React",
        "Tailwind",
        "MongoDB",
        "Express.js",
        "TypeScript",
        "LLM",
        "Flask",
      ],
      liveDemo: "",
      github: import.meta.env.VITE_GITHUB + "/LinguaLink-Frontend",
      fullDescription:
        "LinguaLink is an innovative web application built using modern technologies like React, TypeScript, Node.js, MongoDB, and large language models (LLMs). The platform offers seamless voice and text translation services across up to four languages, making it an essential tool for cross-lingual communication. Users can interact with LinguaLink to either speak or type in one language and receive translations in their preferred output language, whether for personal, educational, or professional use.",
    },
    {
      id: 3,
      title: "Horizon",
      description:
        "A modern, scalable blog platform with a focus on performance and aesthetics",
      image: "projectImg/Horizon.png",
      technologies: [
        "React",
        "Tailwind",
        "Node.js",
        "TypeScript",
        "postgreSQL",
        "Prisma",
        "Hono",
      ],
      liveDemo: "https://horizon-frontend-ten.vercel.app/",
      github: import.meta.env.VITE_GITHUB + "/Horizon-Frontend",
      fullDescription:
        "Horizon is a modern, scalable blog platform designed to provide users with a seamless content creation and reading experience. Built using a robust tech stack that includes React, Tailwind CSS, Cloudflare Workers, Hono web framework, Prisma ORM, PostgreSQL, and Node.js, Horizon focuses on delivering high performance, scalability, and aesthetic appeal.",
    }
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

  //project pagination
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 3;
  const visibleProjects = projects.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );


  return (
    <div className=" relative min-h-screen  text-foreground transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <HeroSection onViewWorkClick={() => scrollToSection("projects")} />
      </section>

      {/* About Section - Refined */}
      <section
        id="about"
        className="py-20 px-4 md:px-8 lg:px-16 transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image */}
            <div className="space-y-6">
              <motion.div
                className="rounded-2xl overflow-hidden aspect-square w-full max-w-md mx-auto border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="dp3.jpg"
                  alt="Developer Profile"
                  className="w-full h-full object-[0%_25%] object-cover"
                />
              </motion.div>
            </div>

            {/* Right Column - Bio & Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-primary">Chandra Sekhar Vattem</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-4">Full-Stack Developer</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    I'm a full-stack developer with experience in building scalable web
                    applications. I specialize in creating high-performance solutions
                    using modern technologies like React, Node.js, and cloud platforms.
                  </p>
                  <p className="text-base leading-relaxed">
                    My background includes work in e-commerce and AI-driven
                    applications, where I've developed enterprise-scale solutions
                    that serve thousands of users. I'm passionate about clean code,
                    user experience, and staying on the cutting edge of technology.
                  </p>
                  <p className="text-base leading-relaxed">
                    When I'm not coding, you can find me travelling, reading tech blogs,
                    or brainstorming new ideas for innovative projects.
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="text-sm font-semibold">Full-Stack Dev</p>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    window.open(import.meta.env.VITE_RESUME, "_blank")
                  }
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
                    className="mr-2"
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

      {/* Skills Section - Smaller badges with less rounded edges */}
      <section
        id="skills"
        className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-background border border-border rounded-md px-3 py-1.5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40">
                  <div className="flex items-center gap-1.5">
                    {/* <span className="text-base">{skill.icon}</span> */}
                    <div className="flex-shrink-0 w-6 h-6">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section - Redesigned with Tabs */}
      <section
        id="experience"
        className="py-20 px-4 md:px-8 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            My professional and educational journey
          </p>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-8">
              {/* Experience Items */}
              {[
                {
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Infor_logo.svg/2048px-Infor_logo.svg.png",
                  title: "Associate SoftWare Engineer",
                  company: "Infor",
                  companyLink: "https://infor.com",
                  period: "Sept 2025 - Present",
                  description:
                    "Contributing to the development and improvement of enterprise cloud applications at a leading global software solutions provider.",
                  technologies: ["C#", ".NET", "PostgreSQL", "AWS"],
                },
                {
                  logo: "https://ik.imagekit.io/chanduv2017/epam_logo_light.svg",
                  title: "Software Engineer Intern",
                  company: "Epam Systems",
                  companyLink: "https://www.epam.com/",
                  period: "Jan 2025 - Jun 2025",
                  description:
                    "Developing and enhancing software solutions as part of a global engineering team. Gaining hands-on experience in real-world application development and best engineering practices.",
                  technologies: ["Machine Learning", "Python", "Research", "Web Development"],
                },
                {
                  logo: "https://ik.imagekit.io/chanduv2017/apssdc.png",
                  title: "AWS Intern",
                  company: "APSSDC",
                  companyLink: "#",
                  period: "Jun 2023 - Aug 2023",
                  description:
                    "Working on cloud-based solutions as part of AWS-focused training and project work. Developing skills in deploying, managing, and monitoring applications using core AWS services.",
                  technologies: ["Leadership", "Event Management", "Communication"],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="w-12 h-12 rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-1">
                                {item.title}
                              </h3>
                              <a
                                href={item.companyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline font-semibold"
                              >
                                {item.company}
                              </a>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {item.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
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
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-8">
              {/* Education Items */}
              {[
                {
                  logo: "https://ik.imagekit.io/chanduv2017/srm-university-logo-1.png",
                  degree: "Bachelor of Technology - B.Tech, Computer Science",
                  institution: "SRM University, AP",
                  institutionLink: "https://srmap.edu.in",
                  period: "2021 - 2025",
                  description:
                    "Maintained a 8.91 CGPA. Specializing in computer science with a focus on modern technologies.",
                  subjects: ["Computer Science", "Data Structures", "Algorithms", "Machine Learning"],
                },
                // {
                //   logo: "",
                //   degree: "Higher Secondary Certificate (Intermediate)",
                //   institution: "Narayana Junior College",
                //   institutionLink: "#",
                //   period: "2019 - 2021",
                //   description:
                //     "Completed higher secondary education with 97% marks, focusing on Mathematics, Physics, and Chemistry.",
                //   subjects: ["Mathematics", "Physics", "Chemistry"],
                // },
                // {
                //   logo: "",
                //   degree: "Secondary School Certificate (Class 10)",
                //   institution: "Narayana E.M. School",
                //   institutionLink: "#",
                //   period: "2018 - 2019",
                //   description:
                //     "Completed SSC board examination with 10GPA.",
                //   subjects: ["Science", "Mathematics", "English"],
                // },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.logo}
                            alt={item.institution}
                            className="w-12 h-12 rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-1">
                                {item.degree}
                              </h3>
                              <a
                                href={item.institutionLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline font-semibold"
                              >
                                {item.institution}
                              </a>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {item.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.subjects.map((subject, subjectIndex) => (
                              <Badge
                                key={subjectIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>

      {/* Projects Section - Updated Layout */}
      <section
        id="projects"
        className="py-20 px-4 md:px-8 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
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

          {/* Carousel Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={() => {
                const container = document.querySelector('#projects .grid');
                if (container) {
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors"
                  onClick={() => {
                    const container = document.querySelector('#projects .grid');
                    if (container) {
                      const cardWidth = container.querySelector('.h-full')?.clientWidth || 0;
                      container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
                    }
                  }}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={() => {
                const container = document.querySelector('#projects .grid');
                if (container) {
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Updated with social info on left */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 flex flex-col"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4 flex-1">
                <a
                  href={`mailto:${import.meta.env.VITE_EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">{import.meta.env.VITE_EMAIL}</p>
                    
                  </div>
                </a>

                <a
                  href={import.meta.env.VITE_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Linkedin</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/chandrasekharvattem/</p>
                    
                  </div>
                </a>

                <a
                  href={import.meta.env.VITE_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Github</p>
                    <p className="text-sm text-muted-foreground">github.com/chanduv2017</p>
                    
                  </div>
                </a>

                <a
                  href={import.meta.env.VITE_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm text-muted-foreground">@chandrasekhar_vattem</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="border-2 border-primary/20 shadow-2xl bg-card/80 backdrop-blur-sm w-full">
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground hover-target">
              © {new Date().getFullYear()} Chandu. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              {
                href: import.meta.env.VITE_GITHUB,
                icon: "github",
                label: "GitHub",
              },
              {
                href: import.meta.env.VITE_LINKEDIN,
                icon: "linkedin",
                label: "LinkedIn",
              },
              {
                href: import.meta.env.VITE_INSTAGRAM,
                icon: "instagram",
                label: "Instagram",
              },
              // {
              //   href: "https://twitter.com",
              //   icon: "twitter",
              //   label: "Twitter",
              // },
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
                  <Github/>
                )}
                {social.icon === "linkedin" && (
                   <Linkedin/>
                )}
                {social.icon === "instagram" && (
                  <Instagram/>
                )}
                
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
      <BackToTopButton />
      {/* <ShootingStars className="z-[-1]"/> */}
      <StarsBackground className="z-[-1]"/>
      <BackgroundBeams className="z-[-1]"/>
    </div>
  );
};

export default Home;