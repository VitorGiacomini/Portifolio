// src/components/Typewriter.jsx
"use client"; // Isso avisa o Next.js que este componente usa recursos do navegador

import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 25 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse border-r-2 border-blue-500 ml-1 inline-block h-5 align-middle"></span>
    </span>
  );
}