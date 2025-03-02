"use client";

import Title_logo_no_ani from "./Title_logo_no_ani";
import { useState } from "react";
import styles from "./Title_logo.module.css";
import Title_logo from "./Title_logo";

export default function Navbar({
  firstLoad,
  aColor,
  handleAboutClick,
  handleHomeClick,
  handleContactClick,
  setFirstLoad,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex relative">
      {" "}
      {/* Add relative here */}
      <div>
        <button>
          {firstLoad ? <Title_logo /> : <Title_logo_no_ani aColor={aColor} />}
        </button>
      </div>
      <div
        className={`ml-auto flex flex-col justify-center ${
          firstLoad ? styles.everything : ""
        }`}
      >
        <ul className="md:flex hidden">
          <button onClick={handleHomeClick}>
            <li className="ml-8 text-2xl">Home</li>
          </button>
          <button onClick={handleAboutClick}>
            <li className="ml-8 text-2xl">About</li>
          </button>
          <button onClick={handleContactClick}>
            <li className="ml-8 text-2xl font-bold">Contact</li>
          </button>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => {
              setFirstLoad?.(false);
              setMenuOpen(!menuOpen);
            }}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-full right-0 w-full bg-background shadow-md md:hidden">
            <ul className="flex flex-col items-center">
              <li
                className="py-2 text-2xl w-full text-center"
                onClick={() => {
                  setMenuOpen(false);
                  handleHomeClick();
                }}
              >
                Home
              </li>
              <li
                className="py-2 text-2xl w-full text-center"
                onClick={() => {
                  setMenuOpen(false);
                  handleAboutClick();
                }}
              >
                About
              </li>
              <li
                className="py-2 text-2xl font-bold w-full text-center"
                onClick={() => {
                  setMenuOpen(false);
                  handleContactClick();
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
