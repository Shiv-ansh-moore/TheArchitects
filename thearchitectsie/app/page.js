"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";
import Navbar from "./components/Navbar";

export default function HomePage() {
  // Initially, only TitleLogo is visible
  const [showRest, setShowRest] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(true);
  }, []);

  useEffect(() => {
    // Wait for TitleLogo's animation to complete.
    // TitleLogo has a delay of 4s + animation of 2s = 6s total.
    const timer = setTimeout(() => {
      setShowRest(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar firstLoad={firstLoad}/>
      {showRest && (
        <div>
          <Hero />
          <Portfolio />
        </div>
      )}
    </div>
  );
}
