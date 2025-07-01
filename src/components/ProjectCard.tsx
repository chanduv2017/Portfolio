import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ExternalLink, Github, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  fullDescription?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and technologies used.",
  thumbnail = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  demoLink = "https://example.com",
  githubLink = "https://github.com/username/project",
  fullDescription = "This is a detailed description of the project. It includes information about the problem solved, approach taken, technologies used, challenges faced, and outcomes achieved. The project demonstrates skills in frontend development, responsive design, and modern web technologies.",
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="bg-background">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 border-0 bg-card/80 backdrop-blur-sm">
          <div className="relative h-48 overflow-hidden group">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="pt-0">
            {isDesktop ? 
            (<Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="w-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    {description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-64 object-cover rounded-md mb-6"
                  />

                  <h3 className="text-lg font-semibold mb-2">
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {fullDescription}
                  </p>

                  <h3 className="text-lg font-semibold mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    {demoLink && (
                      <Button asChild>
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {githubLink && (
                      <Button variant="outline" asChild>
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-auto"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>) : 
            (
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
                  variant="default"
                  className="w-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Details
                </Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-[700px] max-h-[90vh] ">
        <DrawerHeader >
          <DrawerTitle className="text-2xl font-bold">{title}</DrawerTitle>
          <DrawerDescription className="text-muted-foreground">
            {description}
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="mt-4 overflow-y-auto">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-64 object-cover rounded-md mb-6"
                  />

                  <h3 className="text-lg font-semibold mb-2">
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {fullDescription}
                  </p>

                  <h3 className="text-lg font-semibold mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    {demoLink && (
                      <Button asChild>
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {githubLink && (
                      <Button variant="outline" asChild>
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-auto"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                </div>
      </DrawerContent>
    </Drawer>)}

          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
