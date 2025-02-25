"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";
import Navbar from "./components/Navbar";
import About from "./components/About";

let isFirstLoad = true;

export default function HomePage() {
  const [showRest, setShowRest] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    if (isFirstLoad) {
      setFirstLoad(true);
      isFirstLoad = false;
    } else {
      setFirstLoad(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRest(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleHomeClick = () => {
    setShowAbout(false);
    setFirstLoad(false);
  };

  return (
    <div>
      {showAbout && (
        <About
          handleAboutClick={handleAboutClick}
          handleHomeClick={handleHomeClick}
        />
      )}
      {!showAbout && (
        <div>
          <Navbar
            firstLoad={firstLoad}
            handleAboutClick={handleAboutClick}
            handleHomeClick={handleHomeClick}
          />
          {firstLoad ? (
            showRest && (
              <div>
                <Hero firstLoad={firstLoad} />
                <Portfolio firstLoad={firstLoad} />
              </div>
            )
          ) : (
            <div>
              <Hero firstLoad={firstLoad} />
              <Portfolio firstLoad={firstLoad} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
