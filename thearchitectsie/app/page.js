"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";
import Navbar from "./components/Navbar";

let isFirstLoad = true;

export default function HomePage() {
  // Initially, only TitleLogo is visible
  const [showRest, setShowRest] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    // On first run (fresh load or refresh), 'isFirstLoad' will be true,
    // after that it becomes false and remains so for any client-side route transitions.
    if (isFirstLoad) {
      setFirstLoad(true);
      isFirstLoad = false;
    } else {
      setFirstLoad(false);
    }
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
      <Navbar firstLoad={firstLoad} />
      {firstLoad ? (
        // If `firstLoad` is true, only render Hero/Portfolio if `showRest` is also true
        showRest && (
          <div>
            <Hero firstLoad={firstLoad} />
            <Portfolio firstLoad={firstLoad} />
          </div>
        )
      ) : (
        // If `firstLoad` is false, always render Hero/Portfolio
        <div>
          <Hero firstLoad={firstLoad} />
          <Portfolio firstLoad={firstLoad} />
        </div>
      )}
    </div>
  );
}
