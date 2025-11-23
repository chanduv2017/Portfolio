import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  fullDescription?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnail,
  technologies,
  demoLink,
  githubLink,
  fullDescription,
  featured = false,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl group bg-card">
          {/* Project Image */}
          <div className="relative overflow-hidden aspect-video">
            <motion.img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardHeader className="pb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </CardHeader>

          <CardContent className="flex-1 pb-4">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex gap-2 pt-4 border-t">
            <Button
              variant="default"
              size="sm"
              onClick={() => setIsDialogOpen(true)}
              className="flex-1"
            >
              View Details
            </Button>

            {githubLink && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(githubLink, "_blank")}
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4" />
              </Button>
            )}

            {demoLink && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(demoLink, "_blank")}
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-base">
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Description */}
            {fullDescription && (
              <div>
                <h4 className="text-lg font-semibold mb-3">About This Project</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {fullDescription}
                </p>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {demoLink && (
                <Button
                  onClick={() => window.open(demoLink, "_blank")}
                  className="flex-1"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
              {githubLink && (
                <Button
                  variant="outline"
                  onClick={() => window.open(githubLink, "_blank")}
                  className="flex-1"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;