import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-background ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <motion.div
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-foreground hover:text-primary transition-colors"
            >
            Chandu
            </NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
          <NavLink onClick={() => scrollToSection("experience")}>
            Experience
          </NavLink>
          <NavLink onClick={() => scrollToSection("projects")}>
            Projects
          </NavLink>
          <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <MobileNavLink onClick={() => scrollToSection("about")}>
                  About
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection("experience")}>
                  Experience
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection("projects")}>
                  Projects
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection("contact")}>
                  Contact
                </MobileNavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const NavLink = ({ children, onClick, className }: NavLinkProps) => (
  <motion.a
    href="#"
    className={`text-foreground hover:text-primary transition-colors font-medium${className ? ` ${className}` : ""}`}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ children, onClick }: NavLinkProps) => (
  <motion.a
    href="#"
    className="text-foreground hover:text-primary transition-colors font-medium text-lg py-2 px-4"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default Navbar;
