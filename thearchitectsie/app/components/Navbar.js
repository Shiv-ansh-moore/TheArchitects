"use client";

import Title_logo_no_ani from "./Title_logo_no_ani";
import Link from "next/link";
import styles from "./Title_logo.module.css";
import Title_logo from "./Title_logo";

export default function Navbar({ firstLoad, aColor } ) {
  return (
    <div className="flex">
      <div>
        <Link href={"/"}>
          <button>
            {firstLoad ? (
              <Title_logo />
            ) : (<Title_logo_no_ani aColor={aColor}/>
              // <Image
              //   src={"/TitleLogo.svg"}
              //   height={53}
              //   width={280}
              //   alt="The architects Logo"
              // />
            )}
          </button>
        </Link>
      </div>
      <div
        className={`ml-auto flex flex-col justify-center ${
          firstLoad ? styles.everything : ""
        }`}
      >
        <ul className="flex">
          <Link href="/">
            <button>
              <li className="ml-8 text-2xl">Home</li>
            </button>
          </Link>
          <Link href="/about">
            <button>
              <li className="ml-8 text-2xl">About</li>
            </button>
          </Link>
          <Link href="/contact">
            <button>
              <li className="ml-8 text-2xl font-bold">Contact</li>
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
