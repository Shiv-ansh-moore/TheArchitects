"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Title_logo.module.css";
import Title_logo from "./Title_logo";

export default function Navbar({ firstLoad }) {
  return (
    <div className="flex">
      <div>
        <Link href={"/"}>
          <button>
            {firstLoad ? (
              <Title_logo />
            ) : (
              <Image
                src={"/TitleLogo.svg"}
                height={53}
                width={280}
                alt="The architects Logo"
              />
            )}
          </button>
        </Link>
      </div>
      <div
        className={`ml-auto flex flex-col justify-center ${styles.everything}`}
      >
        <ul className="flex">
          <button>
            <li className="ml-8 text-2xl">Home</li>
          </button>
          <Link href="/about">
            <button>
              <li className="ml-8 text-2xl">About</li>
            </button>
          </Link>
          <button>
            <li className="ml-8 text-2xl font-bold">Contact</li>
          </button>
        </ul>
      </div>
    </div>
  );
}
