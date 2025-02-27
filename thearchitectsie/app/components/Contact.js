import Navbar from "./Navbar";
import styles from "./Fade_in.module.css";

export default function Contact({ handleHomeClick, handleAboutClick }) {
  return (
    <div>
      {/* Fade-in red background overlay */}
      <div
        className={`bg-architectsRed min-h-screen w-screen -mt-3 -mr-32 -ml-32 absolute ${styles.fadeIn}`}
      />
      <div className="z-10 relative">
        <Navbar
          aColor="#FFFBF5"
          handleHomeClick={handleHomeClick}
          handleAboutClick={handleAboutClick}
        />
        <div className="flex mt-8">
          <button
            className="bg-background w-24 h-8 rounded-3xl font-bold text-xl"
            onClick={handleHomeClick}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
