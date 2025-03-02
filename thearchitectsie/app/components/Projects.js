import Navbar from "./Navbar";
import Image from "next/image";
import styles from "./Fade_in.module.css";

export default function Project({
  handleAboutClick,
  handleHomeClick,
  handleContactClick,
  title,
  location,
  description,
  PortImage,
  alternate
}) {
  return (
    <div>
      <Navbar
        handleAboutClick={handleAboutClick}
        handleHomeClick={handleHomeClick}
        handleContactClick={handleContactClick}
      />
      <div className={`my-16 ${styles.fadeIn}`}>
        <button onClick={handleHomeClick} className="font-bold text-3xl mb-4">
          &larr;
        </button>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src={PortImage}
            alt={alternate}
            width={750}
            height={563}
            className="rounded-2xl w-full md:w-[50vw]"
          />
          <div className="mt-4 md:mt-0 md:ml-8">
            <div className="text-2xl">
              <h2>{title}</h2>
              <h2 className="font-thin">{location}</h2>
            </div>
            <p className="text-lg max-w-full md:max-w-[50vw]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

