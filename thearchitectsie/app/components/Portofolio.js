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
      />
      <PortofolioPreview
        PortImage={"/Cherrywood.jpg"}
        alternate={"Picture of Project completed at sandy cove"}
        location={"Dublin"}
        title={"RH Cherrywood"}
        aLocation={"right"}
      />
    </div>
  );
}