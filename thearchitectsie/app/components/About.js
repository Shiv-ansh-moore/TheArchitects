import Navbar from "./Navbar";
import styles from "./Fade_in.module.css";

export default function About({ handleAboutClick, handleHomeClick }) {
  return (
    <div>
      <div
        className={`bg-architectsRed min-h-screen w-screen -mt-3 -mr-32 -ml-32 absolute ${styles.fadeIn}`}
      />
      <div className="z-10 relative">
        <Navbar
          aColor="#FFFBF5"
          handleAboutClick={handleAboutClick}
          handleHomeClick={handleHomeClick}
        />
        <p className="text-background max-w-96 my-16 text-xl">
          We are an architectural practice located in Dun Laoghaire, Co. Dublin.
          Our team of architects have extensive experience in domestic and
          commercial work, from home renovations and extensions through to
          one-off houses, housing developments and commercial fit outs. At a
          larger scale we collaborate with other field specialists to bring
          projects through to fruition.
        </p>
        <button
          className="mr-24 bg-background w-24 h-8 rounded-3xl font-bold text-xl"
          onClick={handleHomeClick}
        >
          Back
        </button>
      </div>
    </div>
  );
}
