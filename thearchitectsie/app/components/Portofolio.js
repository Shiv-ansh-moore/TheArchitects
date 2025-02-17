import Image from "next/image";
import styles from "./Fade_in.module.css";

export default function Portfolio() {
  return (
    <div className={`${styles.fadeIn}`}>
      <div className="flex items-start">
        <Image className="mt-8"
          src="/bigA.svg"
          height={463}
          width={327}
          alt="The architects Logo"
        />
        <div className="text-2xl ml-auto mt-32">
          <h3>Sandycove Pavillion</h3>
          <h3 className="font-thin">Dún Laoghaire</h3>
          <Image className="rounded-3xl"
            src="/Sandycove.jpg"
            width={618}
            height={463}
            alt="Picture of Project completed at sandy cove"
          />
        </div>
      </div>
    </div>
  );
}
