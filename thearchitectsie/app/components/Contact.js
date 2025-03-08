import Navbar from "./Navbar";
import styles from "./Fade_in.module.css";
import Form from "./Form";

export default function Contact({ handleHomeClick, handleAboutClick }) {
  return (
    <div>
      {/* Fade-in red background overlay */}
      <div
        className={`bg-architectsRed min-h-screen w-screen fixed -mt-3 -mx-4 md:-mt-3 md:-mr-32 md:-ml-32 ${styles.fadeIn}`}
      />
      <div className="z-10 relative">
        <Navbar
          aColor="#FFFBF5"
          handleHomeClick={handleHomeClick}
          handleAboutClick={handleAboutClick}
        />
        <button
          onClick={handleHomeClick}
          className="font-bold text-3xl mb-4 text-white"
        >
          &larr;
        </button>
        <div className="flex">
          <Form />
        </div>
        <div className="text-background max-w-96 my-8 text-xl">
          <p>The architects, 111 patrick st, Dun Laoghaire, Co. Dublin</p>
          <p>info@thearchitects.ie</p>
          <p>+353 1 2144 444</p>
        </div>
      </div>
    </div>
  );
}
