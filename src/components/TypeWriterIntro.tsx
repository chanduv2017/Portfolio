"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterIntro({name}: { name?: string }) {
  const words = [
    {
      text: "Hi,",
      className:"text-4xl md:text-6xl font-bold mb-4"
    },
    {
      text: "I'm",
      className:"text-4xl md:text-6xl font-bold mb-4"
    },
    {
      text: name || "Chandu",
      className: "text-4xl md:text-6xl font-bold mb-4 text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <TypewriterEffectSmooth words={words} />
  );
}
