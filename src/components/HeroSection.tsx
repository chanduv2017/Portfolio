import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDownIcon } from "lucide-react";
import { TypewriterIntro } from "./TypeWriterIntro";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  imageUrl?: string;
  onViewWorkClick?: () => void;
}

const HeroSection = ({
  name = "Chandu",
  tagline = "Full Stack Developer & Machine Learning Enthusiast",
  imageUrl = "dp.jpg",
  onViewWorkClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20  ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hover-target m-0 p-0">
              <TypewriterIntro name={name}/>
              {/* <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Hi, I'm <span className="text-primary ">{name}</span>
              </h1> */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {tagline}
            </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={onViewWorkClick}
                className="group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowDownIcon className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={imageUrl}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-primary/20 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center items-start p-1"
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
