import styles from "./Fade_in.module.css";
import PortofolioPreview from "./PortofolioPreview";

export default function Portfolio({ firstLoad }) {
  return (
    <div className={`${firstLoad ? styles.fadeIn : ""}`}>
      <PortofolioPreview
        PortImage={"/Sandycove.jpg"}
        alternate={"Picture of Project completed at sandy cove"}
        location={"Dún Laoghaire"}
        title={"Sandycove Pavillion"}
        aLocation={"left"}
        description={`This is where we will put information on about this project.
              Filler text Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.`}
      />
      <PortofolioPreview
        PortImage={"/Cherrywood.jpg"}
        alternate={"Picture of Project completed at sandy cove"}
        location={"Dublin"}
        title={"RH Cherrywood"}
        aLocation={"right"}
        description={`This is where we will put information on about this project.
          Filler text Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.`}
      />
    </div>
  );
}
