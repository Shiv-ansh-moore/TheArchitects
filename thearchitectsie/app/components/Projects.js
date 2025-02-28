import Navbar from "./Navbar";
import Image from "next/image";

export default function Project({
  handleAboutClick,
  handleHomeClick,
  handleContactClick,
  title,
  location,
  description,

}) {
  return (
    <div>
      <Navbar
        handleAboutClick={handleAboutClick}
        handleHomeClick={handleHomeClick}
        handleContactClick={handleContactClick}
      />
      <div className="my-16">
        <button onClick={handleHomeClick} className="font-bold text-3xl mb-4">&larr;</button>
        <div className="flex">
          <Image
            src={"/Sandycove.jpg"}
            width={"750"}
            height={"563"}
            className="rounded-2xl w-[50vw]"
          />
          <div className="ml-8">
            <div className="text-2xl">
              <h2>{title}</h2>
              <h2 className="font-thin">{location}</h2>
            </div>
            <p className="text-lg max-w-[50vw]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
