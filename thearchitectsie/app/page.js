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
  const [showProject, setShowProject] = useState(false);
  const [projectData, setProjectData] = useState("");

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

  const handleprojectData = (data) => {
    setProjectData(data);
  };

  const handleProjectClick = () => {
    setShowProject(true);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowProject(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowProject(false);
  };

  const handleHomeClick = () => {
    // Reset both about and contact when clicking Home
    setShowAbout(false);
    setShowContact(false);
    setFirstLoad(false);
    setShowProject(false);
  };

  // If the contact button has been clicked, show the Contact component.
  if (showContact) {
    return (
      <Contact
        handleHomeClick={handleHomeClick}
        handleAboutClick={handleAboutClick}
      />
    );
  } else if (showProject) {
    return (
      <Project
        handleAboutClick={handleAboutClick}
        handleContactClick={handleContactClick}
        handleHomeClick={handleHomeClick}
        title={projectData.title}
        location={projectData.location}
        description={projectData.description}
        PortImage={projectData.PortImage}
        alternate={projectData.alternate}
      />
    );
  }

  return (
    <div>
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
                <Portfolio
                  firstLoad={firstLoad}
                  handleProjectClick={handleProjectClick}
                  handleprojectData={handleprojectData}
                />
              </div>
            )
          ) : (
            <div>
              <Hero
                firstLoad={firstLoad}
                handleAboutClick={handleAboutClick}
                handleContactClick={handleContactClick}
              />
              <Portfolio
                firstLoad={firstLoad}
                handleProjectClick={handleProjectClick}
                handleprojectData={handleprojectData}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
