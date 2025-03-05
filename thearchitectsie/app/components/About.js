import Navbar from "./Navbar";
import styles from "./Fade_in.module.css";

export default function About({
  handleAboutClick,
  handleHomeClick,
  handleContactClick,
}) {
  return (
    <div>
      <div
        className={`bg-architectsRed min-h-screen w-screen -mt-3 -mx-4 md:-mt-3 md:-mr-32 md:-ml-32 absolute ${styles.fadeIn}`}
      />
      <div className="z-10 relative">
        <Navbar
          aColor="#FFFBF5"
          handleAboutClick={handleAboutClick}
          handleHomeClick={handleHomeClick}
          handleContactClick={handleContactClick}
        />
        <div>
          <button
            onClick={handleHomeClick}
            className="font-bold text-3xl mb-4 text-white"
          >
            &larr;
          </button>
          <p className="text-background max-w-96 text-xl">
            We are an architectural practice located in Dun Laoghaire, Co.
            Dublin. Our team of architects have extensive experience in domestic
            and commercial work, from home renovations and extensions through to
            one-off houses, housing developments and commercial fit outs. At a
            larger scale we collaborate with other field specialists to bring
            projects through to fruition.
          </p>
          <div className="text-background max-w-96 my-8 text-xl">
            <p>The architects, 111 patrick st, Dun Laoghaire, Co. Dublin</p>
            <p>info@thearchitects.ie</p>
            <p>+353 1 2144 444</p>
          </div>
        </div>
      </div>
    </div>
  );
}
