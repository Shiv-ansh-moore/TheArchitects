import Image from "next/image";
import styles from "./Fade_in.module.css";

export default function Hero() {
  return (
    <div className={`mt-32 ${styles.fadeIn}`}>
      <div className="flex ml-1">
        <div className="flex flex-col justify-center mr-1">
          <Image src="\RTE.svg" height={0} width={26} alt="RTE Logo" />
        </div>
        <p className="font-bold">As seen on DIY SOS</p>
      </div>
      <div className="text-6xl leading-[80px]">
        <h1>
          Get yout project started
          <br /> with
          <strong>trusted experts</strong>
        </h1>
      </div>
      <div className="flex ml-1 mt-16">
        <button className="mr-24 bg-architectsRed text-white w-48 h-12 rounded-3xl font-bold text-xl">
          Contact Now
        </button>
        <button className="bg-architectsGrey w-48 h-12 rounded-3xl font-bold text-xl">
          See Reviews
        </button>
      </div>
    </div>
  );
}
