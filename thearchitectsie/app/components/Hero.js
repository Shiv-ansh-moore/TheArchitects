import Image from "next/image";
import styles from "./Fade_in.module.css";

export default function Hero({
  firstLoad,
  handleContactClick,
  handleAboutClick,
}) {
  return (
    <div className={`md:mt-32 mt-12 ${firstLoad ? styles.fadeIn : ""}`}>
      <div className="flex ml-1">
        <div className="flex flex-col justify-center mr-1">
          <Image src="/RTE.svg" height={0} width={26} alt="RTE Logo" />
        </div>
        <p className="font-bold ">As seen on DIY SOS</p>
      </div>
      <div className="md:text-6xl md:leading-[80px] text-3xl">
        <h1>
          Get your project started
          <br /> with
          <strong> trusted experts</strong>
        </h1>
      </div>
      <div className="md:flex md:flex-row ml-1 md:mt-16 mt-1 ">
        <button
          onClick={handleContactClick}
          className="md:mr-24 bg-architectsRed text-white md:w-48 md:h-12 rounded-3xl font-bold md:text-xl w-32 h-8 mr-1"
        >
          Contact Now
        </button>
        <button
          onClick={handleAboutClick}
          className="bg-architectsGrey md:w-48 md:h-12 rounded-3xl font-bold md:text-xl w-24 md:mt-0 h-8"
        >
          About
        </button>
      </div>
    </div>
  );
}
