import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const isMouse = window.matchMedia("(pointer: fine)").matches;
    if (!isMouse) return;

    const cursor = cursorRef.current;
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const hoverables = document.querySelectorAll(".hover-target");

    const handleMouseEnter = () => {
      cursor?.classList.add("cursor--scale");
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove("cursor--scale");
    };

    window.addEventListener("mousemove", moveCursor);
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      if (!isMouse) return; 
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div className="cursor dark:bg-white" ref={cursorRef} />;
};

export default CustomCursor;
