"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Projects";

let isFirstLoad = true;

export default function HomePage() {
  const [showRest, setShowRest] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

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
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
  };

  const handleHomeClick = () => {
    // Reset both about and contact when clicking Home
    setShowAbout(false);
    setShowContact(false);
    setFirstLoad(false);
  };

  // If the contact button has been clicked, show the Contact component.
  if (showContact) {
    return (
      <Contact
        handleHomeClick={handleHomeClick}
        handleAboutClick={handleAboutClick}
      />
    );
  }

  return (
    <div>
      {/* <Project
        handleAboutClick={handleAboutClick}
        handleContactClick={handleContactClick}
        handleHomeClick={handleHomeClick}
        title = {"Sandycove"}
        location={"Dún Laoghaire"}
        description={`This is where we will put information on about this project.
              Filler text Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.`}
      /> */}
      {showAbout && (
        <About
          handleAboutClick={handleAboutClick}
          handleHomeClick={handleHomeClick}
          handleContactClick={handleContactClick}
        />
      )}
      {!showAbout && (
        <div>
          <Navbar
            firstLoad={firstLoad}
            handleAboutClick={handleAboutClick}
            handleHomeClick={handleHomeClick}
            handleContactClick={handleContactClick}
          />
          {firstLoad ? (
            showRest && (
              <div>
                <Hero
                  firstLoad={firstLoad}
                  handleAboutClick={handleAboutClick}
                  handleContactClick={handleContactClick}
                />
                <Portfolio firstLoad={firstLoad} />
              </div>
            )
          ) : (
            <div>
              <Hero
                firstLoad={firstLoad}
                handleAboutClick={handleAboutClick}
                handleContactClick={handleContactClick}
              />
              <Portfolio firstLoad={firstLoad} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
