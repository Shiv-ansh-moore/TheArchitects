"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";
import Title_logo from "./components/Title_logo";
import Navbar from "./components/Navbar";

export default function HomePage() {
  // Initially, only TitleLogo is visible
  const [showRest, setShowRest] = useState(false);
  useEffect(() => {
    // Wait for TitleLogo's animation to complete.
    // TitleLogo has a delay of 4s + animation of 2s = 6s total.
    const timer = setTimeout(() => {
      setShowRest(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!showRest && <Title_logo />}
      {showRest && (
        <div>
          <Navbar />
          <Hero />
          <Portfolio />
        </div>
      )}
    </div>
  );
}
