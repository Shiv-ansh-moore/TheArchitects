"use client";

import Title_logo_no_ani from "./Title_logo_no_ani";
import Link from "next/link";
import styles from "./Title_logo.module.css";
import Title_logo from "./Title_logo";

export default function Navbar({
  firstLoad,
  aColor,
  handleAboutClick,
  handleHomeClick,
}) {
  return (
    <div className="flex">
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
        <ul className="flex">
          <button onClick={handleHomeClick}>
            <li className="ml-8 text-2xl">Home</li>
          </button>
          <button onClick={handleAboutClick}>
            <li className="ml-8 text-2xl">About</li>
          </button>
          <button>
            <li className="ml-8 text-2xl font-bold">Contact</li>
          </button>
        </ul>
      </div>
    </div>
  );
}
